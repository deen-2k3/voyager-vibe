const { Router } = require("express");
const { readJson, appendJson } = require("../lib/store");
const adminAuth = require("../middleware/adminAuth");

const router = Router();

router.get("/", adminAuth, (req, res) => {
  const submissions = readJson("contacts.json").slice().reverse();
  res.json(submissions);
});

router.post("/", (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Name, email, mobile number and message are required" });
  }

  const entry = appendJson("contacts.json", {
    name,
    email,
    phone,
    subject: subject || null,
    message,
    createdAt: new Date().toISOString(),
  });

  res.status(201).json({ ok: true, entry });
});

module.exports = router;
