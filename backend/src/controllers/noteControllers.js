const models = require("../models");

const browse = (req, res) => {
  models.note
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
  models.note
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
  const note = req.body;

  // TODO validations (length, format...)

  note.id = parseInt(req.params.id, 10);

  models.note
    .update(note)
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
  const note = req.body;
  const userId = parseInt(req.params.userId, 10); // récupérer l'ID de l'utilisateur depuis les paramètres de la requête

  // TODO validations (length, format...)

  note.user_id = userId; // ajouter l'ID de l'utilisateur à l'objet note

  models.note
    .insert(note)
    .then(([result]) => {
      // Récupérer la note qui vient d'être ajoutée
      models.note
        .find(result.insertId)
        .then(([rows]) => {
          res.status(201).json(rows[0]); // Envoyer la note dans la réponse
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
  models.note
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

const findByUserId = (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  models.note
    .findByUserId(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const deleteNoteByUserId = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const noteId = parseInt(req.params.noteId, 10);

  models.note
    .deleteNoteByUserId(noteId, userId)
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
  destroy,
  findByUserId,
  deleteNoteByUserId,
};
