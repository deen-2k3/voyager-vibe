const { Router } = require("express");
const { readJson } = require("../lib/store");

const router = Router();

router.get("/", (req, res) => {
  res.json(readJson("blogs.json"));
});

router.get("/:slug", (req, res) => {
  const post = readJson("blogs.json").find((b) => b.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

module.exports = router;
