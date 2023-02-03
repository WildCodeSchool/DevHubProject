const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }

  insert(message) {
    return this.database.query(
      `insert into ${this.table} (title, content, date_sent, state, author_id) values (?, ?, ?, ?, ?)`,
      [
        message.title,
        message.content,
        message.date_sent,
        message.state,
        message.author_id,
      ]
    );
  }

  update(message) {
    return this.database.query(
      `update ${this.table} set title = ?, content = ?, date_sent = ?, state = ?, author_id = ? where id = ?`,
      [
        message.title,
        message.content,
        message.date_sent,
        message.state,
        message.author_id,
        message.id,
      ]
    );
  }
}
module.exports = MessageManager;
