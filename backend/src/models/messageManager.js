const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }

  insert(message) {
    return this.database.query(
      `insert into ${this.table} (title, content, author, receiver, date_sent, state) values (?, ?, ?, ?, ?, ?)`,
      [
        message.title,
        message.content,
        message.author,
        message.receiver,
        message.date_sent,
        message.state,
      ]
    );
  }

  update(message) {
    return this.database.query(
      `update ${this.table} set title = ?, content = ?, author = ?, receiver = ?, date_sent = ?, state = ? where id = ?`,
      [
        message.title,
        message.content,
        message.author,
        message.receiver,
        message.date_sent,
        message.state,
        message.id,
      ]
    );
  }
}
module.exports = MessageManager;
