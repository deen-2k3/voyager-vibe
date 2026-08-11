const { Router } = require("express");
const { appendJson } = require("../lib/store");

const router = Router();

router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required" });
  }

  const entry = appendJson("contacts.json", {
    name,
    email,
    subject: subject || null,
    message,
    createdAt: new Date().toISOString(),
  });

  res.status(201).json({ ok: true, entry });
});

module.exports = router;
