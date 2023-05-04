const fs = require("node:fs");
const path = require("node:path");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL ?? "http://localhost:3000/",
      "http://127.0.0.1:5173/",
      "http://localhost:5173/",
    ],
    optionsSuccessStatus: 200,
  })
);

const router = require("./router");

app.use(router);
app.use(express.static(path.join(__dirname, "../public")));

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);
if (fs.existsSync(reactIndexFile)) {
  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

module.exports = app;
