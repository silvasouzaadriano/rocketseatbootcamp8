import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // virtual fields only exist on code side
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // This code will be ran before inserts or updates
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // This method will be used by SessionController (returning True or False)
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
