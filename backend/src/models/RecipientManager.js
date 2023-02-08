const AbstractManager = require("./AbstractManager");

class RecipientManager extends AbstractManager {
  constructor() {
    super({ table: "recipient" });
  }

  insert(recipient) {
    return this.database.query(
      `insert into ${this.table} (recipient_id, message_id)
       values (?, ?)`,
      [recipient.recipient_id, recipient.message_id]
    );
  }

  update(recipient) {
    return this.database.query(
      `update ${this.table} set recipient_id ?, message_id where id = ?`,
      [recipient.recipient_id, recipient.message_id]
    );
  }
}

module.exports = RecipientManager;
