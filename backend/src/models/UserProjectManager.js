const AbstractManager = require("./AbstractManager");

class UserProjectManager extends AbstractManager {
  constructor() {
    super({ table: "user_project" });
  }

  insert(userProject) {
    return this.database.query(
      `insert into ${this.table} (user_id, project_id)
       values (?, ?)`,
      [userProject.user_id, userProject.project_id, userProject.userIds]
    );
  }

  update(userProject) {
    return this.database.query(
      `update ${this.table} set user_id ?, project_id where id = ?`,
      [userProject.user_id, userProject.project_id, userProject.id]
    );
  }

  findProjectNameByUserId(userId) {
    return this.database.query(
      `SELECT project.name
       FROM project
       INNER JOIN user_project ON project.id = user_project.project_id
       WHERE user_project.user_id = ?`,
      [userId]
    );
  }
}

module.exports = UserProjectManager;
