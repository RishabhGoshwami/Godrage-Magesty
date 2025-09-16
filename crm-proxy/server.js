require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN;

// ✅ CORS middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && origin === FRONTEND_ORIGIN) {
    res.setHeader("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }
  // Preflight request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

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
    const crmPayload = {
      access_key: ACCESS_KEY,
      project: req.body.project || "Godrej Majesty",
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      ...req.body.extra,
    };

    const crmResponse = await axios.post(CRM_URL, crmPayload, {
      headers: { "Content-Type": "application/json" },
      timeout: 10000,
    });

    res.status(crmResponse.status).json(crmResponse.data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    if (err.response) {
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
