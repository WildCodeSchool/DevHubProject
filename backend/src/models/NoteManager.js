const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

  insert(note) {
    return this.database.query(
      `insert into ${this.table} (description, user_id) values (?, ?)`,
      [note.description, note.user_id]
    );
  }

  update(note) {
    return this.database.query(
      `update ${this.table} set description = ?, user_id = ? where id = ?`,
      [note.description, note.user_id, note.id]
    );
  }
}

module.exports = NoteManager;
