require("dotenv").config();
const express = require("express");
const cors = require("cors");

const destinationsRouter = require("./routes/destinations");
const blogsRouter = require("./routes/blogs");
const servicesRouter = require("./routes/services");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/destinations", destinationsRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/services", servicesRouter);
app.use("/api/contact", contactRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Voyager Vibe API listening on http://localhost:${PORT}`);
});
