const { Router } = require("express");
const { readJson } = require("../lib/store");

const router = Router();

router.get("/", (req, res) => {
  res.json(readJson("destinations.json"));
});

router.get("/:slug", (req, res) => {
  const destination = readJson("destinations.json").find((d) => d.slug === req.params.slug);
  if (!destination) return res.status(404).json({ error: "Destination not found" });
  res.json(destination);
});

module.exports = router;
