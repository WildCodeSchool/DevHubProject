const express = require("express");

const router = express.Router();

const noteControllers = require("./controllers/noteControllers");

router.get("/notes", noteControllers.browse);
router.get("/notes/:id", noteControllers.read);
router.put("/notes/:id", noteControllers.edit);
router.post("/notes", noteControllers.add);
router.delete("/notes/:id", noteControllers.destroy);

module.exports = router;
