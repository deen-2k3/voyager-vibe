const { Router } = require("express");
const { readJson, appendJson, writeJson } = require("../lib/store");
const adminAuth = require("../middleware/adminAuth");

const router = Router();

function slugify(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

router.get("/", (req, res) => {
  res.json(readJson("destinations.json"));
});

router.get("/:slug", (req, res) => {
  const destination = readJson("destinations.json").find((d) => d.slug === req.params.slug);
  if (!destination) return res.status(404).json({ error: "Destination not found" });
  res.json(destination);
});

router.post("/", adminAuth, (req, res) => {
  const { name, region, image, gallery, tagline, description, rating, bestSeason } =
    req.body || {};

  if (!name || !region || !image || !tagline || !description || !bestSeason) {
    return res.status(400).json({
      error: "name, region, image, tagline, description, and bestSeason are required",
    });
  }

  const slug = slugify(name);
  const destinations = readJson("destinations.json");

  if (destinations.some((d) => d.slug === slug)) {
    return res.status(409).json({ error: "A destination with this name already exists" });
  }

  const entry = {
    slug,
    name,
    region,
    image,
    ...(Array.isArray(gallery) && gallery.length > 0 ? { gallery } : {}),
    tagline,
    description,
    rating: Number(rating) || 5,
    bestSeason,
  };

  appendJson("destinations.json", entry);
  res.status(201).json({ ok: true, entry });
});

router.put("/:slug", adminAuth, (req, res) => {
  const { name, region, image, gallery, tagline, description, rating, bestSeason } =
    req.body || {};

  if (!name || !region || !image || !tagline || !description || !bestSeason) {
    return res.status(400).json({
      error: "name, region, image, tagline, description, and bestSeason are required",
    });
  }

  const destinations = readJson("destinations.json");
  const index = destinations.findIndex((d) => d.slug === req.params.slug);

  if (index === -1) {
    return res.status(404).json({ error: "Destination not found" });
  }

  const updated = {
    ...destinations[index],
    name,
    region,
    image,
    tagline,
    description,
    rating: Number(rating) || destinations[index].rating,
    bestSeason,
  };

  if (Array.isArray(gallery) && gallery.length > 0) {
    updated.gallery = gallery;
  } else {
    delete updated.gallery;
  }

  destinations[index] = updated;
  writeJson("destinations.json", destinations);
  res.json({ ok: true, entry: updated });
});

router.delete("/:slug", adminAuth, (req, res) => {
  const destinations = readJson("destinations.json");
  const index = destinations.findIndex((d) => d.slug === req.params.slug);

  if (index === -1) {
    return res.status(404).json({ error: "Destination not found" });
  }

  const [removed] = destinations.splice(index, 1);
  writeJson("destinations.json", destinations);
  res.json({ ok: true, entry: removed });
});

module.exports = router;
