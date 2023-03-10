const fs = require("node:fs");
const path = require("node:path");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json());

// Cross-origin resource sharing (CORS) Accéder à des ressources d'un serveur situé sur une autre origine que le site courant
app.use(
  cors({
    origin: "http://127.0.0.1:5173",

    optionsSuccessStatus: 200,
  })
);

// Ajouter l'en-tête Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Import et montage des routes de l'API
const router = require("./router");

app.use(router);

// Serveur de fichiers statiques dans le dossier "public" du backend

app.use(express.static(path.join(__dirname, "../public")));

// Serveur de fichiers statiques pour l'application React

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

  // Redirection de toutes les requêtes vers le fichier index.html de React
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// Export de l'application Express
module.exports = app;
