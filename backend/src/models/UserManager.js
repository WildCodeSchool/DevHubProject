const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, 
      phone, user_image, biography, hashedPassword, github_page, city)
       values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.user_image,
        user.biography,
        user.hashedPassword,
        user.github_page,
        user.city,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, phone = ?, user_image = ?,
      biography = ?, hashedPassword = ?, github_page = ?, city = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.user_image,
        user.biography,
        user.hashedPassword,
        user.github_page,
        user.city,
        user.id,
      ]
    );
  }

  findUser(email) {
    return this.database.query(`select * from  ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
