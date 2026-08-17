// Pin the working directory to this file's location regardless of how the
// process was launched — Next's project-root resolution and lib/api.ts's
// data-file reads both depend on process.cwd() matching the repo root.
process.chdir(__dirname);

require("dotenv").config();
const path = require("path");
const express = require("express");
const next = require("next");

const destinationsRouter = require("./api/routes/destinations");
const blogsRouter = require("./api/routes/blogs");
const servicesRouter = require("./api/routes/services");
const contactRouter = require("./api/routes/contact");
const uploadsRouter = require("./api/routes/uploads");
const feedbackRouter = require("./api/routes/feedback");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
});

// Set SITE_LOCKED=true in the host's environment variables to take the whole
// site offline (everything 404s, Next.js never even initializes) — e.g. while
// a client payment is pending. Remove the variable and restart to restore.
if (process.env.SITE_LOCKED === "true") {
  const lockedServer = express();
  lockedServer.use((req, res) => {
    res.status(404).send("Not Found");
  });
  lockedServer.listen(port, () => {
    console.log(`Voyager Vibe is LOCKED (SITE_LOCKED=true) — serving 404 on port ${port}`);
  });
} else {
  startApp();
}

function startApp() {
  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    const server = express();

    server.use(express.json());
    server.use("/uploads", express.static(path.join(__dirname, "public", "uploads")));

    server.get("/api/health", (req, res) => res.json({ ok: true }));
    server.use("/api/destinations", destinationsRouter);
    server.use("/api/blogs", blogsRouter);
    server.use("/api/services", servicesRouter);
    server.use("/api/contact", contactRouter);
    server.use("/api/uploads", uploadsRouter);
    server.use("/api/feedback", feedbackRouter);

    server.use((req, res) => {
      handle(req, res).catch((err) => {
        console.error("Request handler error:", err);
        if (!res.headersSent) {
          res.status(500).send("Internal Server Error");
        }
      });
    });

    server.listen(port, () => {
      console.log(`Voyager Vibe listening on port ${port}`);
    });
  });
}
