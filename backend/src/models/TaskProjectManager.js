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
      [taskProject.task_id, taskProject.project_id, taskProject.id]
    );
  }

  getUserTasksByProjectId(userId, projectId) {
    return this.database.query(
      `SELECT t.* FROM task t
      JOIN task_project tp ON tp.task_id = t.id
      JOIN project p ON p.id = tp.project_id
      WHERE t.user_id = ? AND p.id = ?
      `,
      [userId, projectId]
    );
  }
}

module.exports = TaskProjectManager;
