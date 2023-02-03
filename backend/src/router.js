const express = require("express");

const router = express.Router();

const taskControllers = require("./controllers/taskControllers");

router.get("/task", taskControllers.browse);
router.get("/task/:id", taskControllers.read);
router.post("/task", taskControllers.add);
router.put("/task/:id", taskControllers.edit);
router.delete("/task/:id", taskControllers.destroy);

module.exports = router;
