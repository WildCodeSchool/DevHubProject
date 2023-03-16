const models = require("../models");

const browse = (req, res) => {
  models.taskProject
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.taskProject
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const taskProject = req.body;

  // TODO validations (length, format...)

  taskProject.id = parseInt(req.params.id, 10);

  models.taskProject
    .update(taskProject)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const taskProject = req.body;

  // TODO validations (length, format...)

  models.taskProject
    .insert(taskProject)
    .then(([result]) => {
      res.location(`/taskProjects/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.taskProject
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserTasksByProjectId = (req, res) => {
  console.info(req.user, "REQ");
  const userId = req.user ? req.user.id : null;
  console.info(userId, "USERID");
  const { projectId } = req.params;
  console.info(projectId, "PROJECTID");

  models.taskProject
    .getUserTasksByProjectId(userId, projectId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getUserTasksByProjectId,
};
