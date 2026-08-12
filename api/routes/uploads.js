const { Router } = require("express");
const adminAuth = require("../middleware/adminAuth");
const upload = require("../middleware/upload");

const router = Router();

router.post("/", adminAuth, upload.array("images", 10), (req, res) => {
  const files = req.files || [];

  if (files.length === 0) {
    return res.status(400).json({ error: "No image files were uploaded" });
  }

  const urls = files.map((file) => `/uploads/${file.filename}`);
  res.status(201).json({ ok: true, urls });
});

router.use((err, req, res, next) => {
  res.status(400).json({ error: err.message || "Upload failed" });
});

module.exports = router;
