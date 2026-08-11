const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "data");

function readJson(filename) {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function appendJson(filename, entry) {
  const filePath = path.join(dataDir, filename);
  const list = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf8")) : [];
  list.push(entry);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), "utf8");
  return entry;
}

module.exports = { readJson, appendJson };
