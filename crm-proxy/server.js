require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());

// ✅ Allowed origins: local dev + production
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.FRONTEND_ORIGIN, // e.g., https://www.godrejmajestysec12.in
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight OPTIONS requests
app.options("*", cors());

// Environment variables
const PORT = process.env.PORT || 8000;
const CRM_URL = process.env.CRM_URL;
const ACCESS_KEY = process.env.ACCESS_KEY;

if (!CRM_URL || !ACCESS_KEY) {
  console.error("❌ Please set CRM_URL and ACCESS_KEY in environment variables");
  process.exit(1);
}

// POST /submit-lead
app.post("/submit-lead", async (req, res) => {
  try {
    console.log("📩 Incoming lead:", req.body);

    const crmPayload = {
      access_key: ACCESS_KEY,
      project: req.body.project || "Godrej Majesty",
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      ...req.body.extra,
    };

    console.log("➡️ Forwarding payload to CRM:", crmPayload);

    const crmResponse = await axios.post(CRM_URL, crmPayload, {
      headers: { "Content-Type": "application/json" },
      timeout: 10000,
    });

    console.log("✅ CRM response:", crmResponse.data);
    res.status(crmResponse.status).json(crmResponse.data);
  } catch (err) {
    console.error("❌ Proxy error:", err.message);
    if (err.response) {
      console.error("CRM response data:", err.response.data);
      return res.status(err.response.status || 502).json({
        proxied: true,
        error: err.response.data,
      });
    }
    res.status(502).json({ proxied: true, error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT} -> forwards to CRM: ${CRM_URL}`);
});
