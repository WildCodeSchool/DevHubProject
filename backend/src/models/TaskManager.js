const AbstractManager = require("./AbstractManager");

class TaskManager extends AbstractManager {
  constructor() {
    super({ table: "task" });
  }

  insert(task) {
    return this.database.query(
      `insert into ${this.table} (id, name, task_start_date, task_end_date, description, state, progress, type, user_id)
     values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        task.id,
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
      `update ${this.table} set name = ?, task_start_date= ?, task_end_date = ?, description = ?, state = ?, progress = ?, type = ?, user_id = ? where id = ?`,
      [
        task.name,
        task.task_start_date,
        task.task_end_date,
        task.description,
        task.state,
        task.progress,
        task.type,
        task.user_id,
        task.id,
      ]
    );
  }

  getTasksByProjectId(projectId) {
    return this.database.query(
      `SELECT * FROM task INNER JOIN task_project ON task.id = task_project.task_id 
      WHERE task_project.project_id = ?`,
      [projectId]
    );
  }

  getTasksByUserId(userId) {
    return this.database.query(`SELECT * FROM task WHERE user_id = ?`, [
      userId,
    ]);
  }
}

module.exports = TaskManager;
