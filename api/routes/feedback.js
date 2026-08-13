const { randomUUID } = require("crypto");
const { Router } = require("express");
const { readJson, appendJson, writeJson } = require("../lib/store");
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
    id: randomUUID(),
    name,
    email,
    rating: ratingNumber,
    message: message || null,
    createdAt: new Date().toISOString(),
  });

  res.status(201).json({ ok: true, entry });
});

router.delete("/:id", adminAuth, (req, res) => {
  const submissions = readJson("feedback.json");
  const index = submissions.findIndex((s) => s.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  const [removed] = submissions.splice(index, 1);
  writeJson("feedback.json", submissions);
  res.json({ ok: true, entry: removed });
});

module.exports = router;
