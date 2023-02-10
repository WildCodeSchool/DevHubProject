const models = require("../models");

const browse = (req, res) => {
  models.message
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
  models.message
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
  const message = req.body;

  // TODO validations (length, format...)

  message.id = parseInt(req.params.id, 10);

  models.message
    .update(message)
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
  const message = req.body;

  // TODO validations (length, format...)

  models.message
    .insert(message)
    .then(([result]) => {
      res.location(`/messages/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.message
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
const addMessage = (req, res) => {
  const message = req.body;

  models.message
    .insert(message)
    .then(([result]) => {
      const message_id = result.insertId;
      const { mapageIds } = message;
      Promise.all(
        mapageIds.map((recipient_id) => {
          return models.recipient.insert({ message_id, recipient_id });
        })
      )
        .then(() => {
          res.location(`/messages/${message_id}`).sendStatus(201);
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

module.exports = {
  browse,
  read,
  edit,
  addMessage,
  add,
  destroy,
};
