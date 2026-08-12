const { existsSync } = require("fs");
const { execSync } = require("child_process");
const path = require("path");
const { createServer } = require("http");
const next = require("next");

// Hostinger's Node.js app runner only supports "install, then run this file" —
// there's no separate build step, so build here on first boot if needed.
const buildIdPath = path.join(__dirname, ".next", "BUILD_ID");
if (!existsSync(buildIdPath)) {
  console.log("No production build found — running `next build`...");
  execSync("npx next build", { stdio: "inherit", cwd: __dirname });
}

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`Voyager Vibe frontend listening on port ${port}`);
  });
});
