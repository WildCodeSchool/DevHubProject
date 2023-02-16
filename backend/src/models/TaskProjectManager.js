const AbstractManager = require("./AbstractManager");

class TaskProjectManager extends AbstractManager {
  constructor() {
    super({ table: "task_project" });
  }

  insert(taskProject) {
    return this.database.query(
      `insert into ${this.table} (task_id, project_id)
       values (?, ?)`,
      [taskProject.task_id, taskProject.project_id, taskProject.taskIds]
    );
  }

  update(taskProject) {
    return this.database.query(
      `update ${this.table} set task_id ?, project_id where id = ?`,
      [taskProject.task_id, taskProject.project_id]
    );
  }
}

module.exports = TaskProjectManager;
