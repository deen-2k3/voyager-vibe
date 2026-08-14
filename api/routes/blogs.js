const { Router } = require("express");
const { readJson, appendJson, writeJson } = require("../lib/store");
const adminAuth = require("../middleware/adminAuth");

const router = Router();

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

router.get("/", (req, res) => {
  res.json(readJson("blogs.json"));
});

router.get("/:slug", (req, res) => {
  const post = readJson("blogs.json").find((b) => b.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

router.post("/", adminAuth, (req, res) => {
  const { title, image, author, date, excerpt, content } = req.body || {};

  if (!title || !image || !author || !date || !excerpt || !content) {
    return res.status(400).json({
      error: "title, image, author, date, excerpt, and content are required",
    });
  }

  const slug = slugify(title);
  const posts = readJson("blogs.json");

  if (posts.some((b) => b.slug === slug)) {
    return res.status(409).json({ error: "A blog post with this title already exists" });
  }

  const entry = { slug, title, image, author, date, excerpt, content };
  appendJson("blogs.json", entry);
  res.status(201).json({ ok: true, entry });
});

router.put("/:slug", adminAuth, (req, res) => {
  const { title, image, author, date, excerpt, content } = req.body || {};

  if (!title || !image || !author || !date || !excerpt || !content) {
    return res.status(400).json({
      error: "title, image, author, date, excerpt, and content are required",
    });
  }

  const posts = readJson("blogs.json");
  const index = posts.findIndex((b) => b.slug === req.params.slug);

  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const updated = { ...posts[index], title, image, author, date, excerpt, content };
  posts[index] = updated;
  writeJson("blogs.json", posts);
  res.json({ ok: true, entry: updated });
});

router.delete("/:slug", adminAuth, (req, res) => {
  const posts = readJson("blogs.json");
  const index = posts.findIndex((b) => b.slug === req.params.slug);

  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const [removed] = posts.splice(index, 1);
  writeJson("blogs.json", posts);
  res.json({ ok: true, entry: removed });
});

module.exports = router;
