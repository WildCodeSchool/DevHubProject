const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(
      `insert into ${this.table} (name, state, description, project_start_date, project_end_date, progress, project_manager) values (?, ?, ?, ?, ?, ?, ?) `,
      [
        project.name,
        project.state,
        project.description,
        project.project_start_date,
        project.project_end_date,
        project.progress,
        project.project_manager,
      ]
    );
  }

  update(project) {
    return this.database.query(
      `update ${this.table} set name = ?, state = ?, description = ?, project_start_date = ?, project_end_date = ?, progress = ?, project_manager = ? where id = ?`,
      [
        project.name,
        project.state,
        project.description,
        project.project_start_date,
        project.project_end_date,
        project.progress,
        project.project_manager,
        project.id,
      ]
    );
  }
}
module.exports = ProjectManager;
