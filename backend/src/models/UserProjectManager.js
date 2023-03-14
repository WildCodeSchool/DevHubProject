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

  async getUsersByProjectId(projectId) {
    const result = await this.database.query(
      `SELECT user.*
       FROM user
       INNER JOIN user_project ON user.id = user_project.user_id
       WHERE user_project.project_id = ?`,
      [projectId]
    );
    return result;
  }
}

module.exports = UserProjectManager;
