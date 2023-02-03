const AbstractManager = require("./AbstractManager");

class taskManager extends AbstractManager {
  constructor() {
    super({ table: "task" });
  }

  insert(task) {
    return this.database.query(
      `insert into ${this.table} (name, task_start_date, task_end_date, description, state, progress, type, user_id)
     values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        task.name,
        task.task_start_date,
        task.task_end_date,
        task.description,
        task.state,
        task.progress,
        task.type,
        task.user_id,
      ]
    );
  }

  update(task) {
    return this.database.query(
      `update ${this.table} set name = ?,  state = ?, progress = ? where id = ?`,
      [task.name, task.state, task.progress, task.id]
    );
  }
}

module.exports = taskManager;
