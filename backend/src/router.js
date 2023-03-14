const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  // verifyToken,
  // verifyId,
} = require("./middlewares/auth");

const userControllers = require("./controllers/userControllers");

// GET
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
// REGISTER
router.post("/users", hashPassword, userControllers.add);
router.post(
  "/users/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// POST,PUT & DELETE

// router.use(verifyToken); // Authentication Wall

// router.put("/users/:id", verifyId, hashPassword, userControllers.edit);
// router.delete("/users/:id", verifyId, userControllers.destroy);

const projectControllers = require("./controllers/projectControllers");

router.get("/users/:id/projects", projectControllers.getProjectsByUserId);
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

router.get("/projects/:id/tasks", taskControllers.getTasksByProjectId);
router.get("/tasks", taskControllers.browse);
router.get("/tasks/:id", taskControllers.read);
router.post("/tasks", taskControllers.add);
router.put("/tasks/:id", taskControllers.edit);
router.delete("/tasks/:id", taskControllers.destroy);

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

const userProjectControllers = require("./controllers/userProjectControllers");

router.get("/projects/:id/users", userProjectControllers.getUsersByProjectId);
router.get("/userProjects", userProjectControllers.browse);
router.get("/userProjects/:id", userProjectControllers.read);
router.post("/userProjects", userProjectControllers.add);
router.delete("/userProjects/:id", userProjectControllers.destroy);

const taskProjectControllers = require("./controllers/taskProjectControllers");

router.get("/taskProjects", taskProjectControllers.browse);
router.get("/taskProjects/:id", taskProjectControllers.read);
router.post("/taskProjects", taskProjectControllers.add);
router.put("/taskProjects", taskProjectControllers.edit);
router.delete("/taskProjects/:id", taskProjectControllers.destroy);

module.exports = router;
