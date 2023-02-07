const express = require("express");

const router = express.Router();

const projectControllers = require("./controllers/projectControllers");

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.put("/projects/:id", projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

const noteControllers = require("./controllers/noteControllers");

router.get("/notes", noteControllers.browse);
router.get("/notes/:id", noteControllers.read);
router.put("/notes/:id", noteControllers.edit);
router.post("/notes", noteControllers.add);
router.delete("/notes/:id", noteControllers.destroy);

const taskControllers = require("./controllers/taskControllers");

router.get("/task", taskControllers.browse);
router.get("/task/:id", taskControllers.read);
router.post("/task", taskControllers.add);
router.put("/task/:id", taskControllers.edit);
router.delete("/task/:id", taskControllers.destroy);

module.exports = router;
