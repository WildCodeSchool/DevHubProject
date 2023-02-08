const AbstractManager = require("./AbstractManager");

class UserProjectManager extends AbstractManager {
  constructor() {
    super({ table: "user_project" });
  }

  insert(userProject) {
    return this.database.query(
      `insert into ${this.table} (user_id, project_id)
       values (?, ?)`,
      [userProject.user_id, userProject.project_id]
    );
  }

  update(userProject) {
    return this.database.query(
      `update ${this.table} set user_id ?, project_id where id = ?`,
      [userProject.user_id, userProject.project_id]
    );
  }
}

module.exports = UserProjectManager;
