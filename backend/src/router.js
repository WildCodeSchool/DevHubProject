const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

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

const messageControllers = require("./controllers/messageControllers");

router.get("/messages", messageControllers.browse);
router.get("/messages/:id", messageControllers.read);
router.put("/messages/:id", messageControllers.edit);
router.post("/messages", messageControllers.addMessage);
router.delete("/messages/:id", messageControllers.destroy);

const recipientControllers = require("./controllers/recipientControllers");

router.get("/recipients", recipientControllers.browse);
router.get("/recipients/:id", recipientControllers.read);
router.put("/recipients/:id", recipientControllers.edit);
router.post("/recipients", recipientControllers.add);
router.delete("/recipients/:id", recipientControllers.destroy);

module.exports = router;
