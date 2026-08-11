const { Router } = require("express");
const { readJson } = require("../lib/store");

const router = Router();

router.get("/", (req, res) => {
  res.json(readJson("services.json"));
});

module.exports = router;
