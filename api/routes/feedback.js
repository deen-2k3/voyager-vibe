const { Router } = require("express");
const { readJson, appendJson } = require("../lib/store");
const adminAuth = require("../middleware/adminAuth");

const router = Router();

router.get("/", adminAuth, (req, res) => {
  const submissions = readJson("feedback.json").slice().reverse();
  res.json(submissions);
});

router.post("/", (req, res) => {
  const { name, email, rating, message } = req.body || {};

  const ratingNumber = Number(rating);
  if (!name || !email || !ratingNumber || ratingNumber < 1 || ratingNumber > 5) {
    return res.status(400).json({ error: "Name, email and a rating from 1 to 5 are required" });
  }

  const entry = appendJson("feedback.json", {
    name,
    email,
    rating: ratingNumber,
    message: message || null,
    createdAt: new Date().toISOString(),
  });

  res.status(201).json({ ok: true, entry });
});

module.exports = router;
