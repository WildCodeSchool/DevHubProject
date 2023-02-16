const models = require("../models");

const browse = (req, res) => {
  models.project
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
  models.project
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
  const project = req.body;

  // TODO validations (length, format...)

  project.id = parseInt(req.params.id, 10);

  models.project
    .update(project)
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
  const project = req.body;

  // TODO validations (length, format...)

  models.project
    .insert(project)
    .then(([result]) => {
      res.location(`/projects/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const addProject = (req, res) => {
  const project = req.body;

  models.project
    .insert(project)
    .then(([result]) => {
      const project_id = result.insertId;
      const { userIds } = project;
      Promise.all(
        userIds.map((user_id) => {
          return models.userProject.insert({ user_id, project_id });
        })
      )
        .then(() => {
          res.location(`/projects/${project_id}`).sendStatus(201);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const addTask = (req, res) => {
  const project = req.body;

  models.project
    .insert(project)
    .then(([result]) => {
      const project_id = result.insertId;
      const { taskIds } = project;
      Promise.all(
        taskIds.map((task_id) => {
          return models.taskProject.insert({ task_id, project_id });
        })
      )
        .then(() => {
          res.location(`/projects/${project_id}`).sendStatus(201);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.project
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

module.exports = {
  browse,
  read,
  edit,
  add,
  addProject,
  addTask,
  destroy,
};
