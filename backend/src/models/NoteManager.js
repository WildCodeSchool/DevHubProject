const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

  insert(note) {
    return this.database.query(
      `insert into ${this.table} (description, user_id) values (?, ?) `,
      [note.description, note.user_id]
    );
  }

  update(note) {
    return this.database.query(
      `update ${this.table} set description = ?, user_id = ? where id = ?`,
      [note.description, note.user_id, note.id]
    );
  }

  findByUserId(userId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
  }

  deleteNoteByUserId(noteId, userId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [noteId, userId]
    );
  }
}

module.exports = NoteManager;
