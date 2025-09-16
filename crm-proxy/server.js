require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());

// ✅ Allow both 5173 and 5174 during dev
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
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

const PORT = process.env.PORT || 8000;
const CRM_URL = process.env.CRM_URL;
const ACCESS_KEY = process.env.ACCESS_KEY;

if (!CRM_URL || !ACCESS_KEY) {
  console.error("❌ Please set CRM_URL and ACCESS_KEY in .env");
  process.exit(1);
}

app.post("/submit-lead", async (req, res) => {
  try {
    // Build payload to send to CRM
    const crmPayload = {
      access_key: ACCESS_KEY, // default: put key in body
      project: req.body.project || "Godrej Majesty",
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      ...req.body.extra, // forward any extra fields
    };

    // ✅ Send request to CRM
    const crmResponse = await axios.post(CRM_URL, crmPayload, {
      headers: { "Content-Type": "application/json" },
      timeout: 10000,
    });

    res.status(crmResponse.status).json(crmResponse.data);
  } catch (err) {
    console.error("Proxy error:", err.message);
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

app.listen(PORT, () => {
  console.log(`🚀 Proxy running on http://localhost:${PORT} -> forwards to ${CRM_URL}`);
});
