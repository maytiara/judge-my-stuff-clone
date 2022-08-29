const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: { // Added to define PK
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      unique:true,
      validate: {
        // length: [10],
      },
    },
  },
  {

    // WHEN USER FUNCTION IS CREATED, 
    // USER MODEL WILL RUN THE HOOK- (BELOW) CREATING THE PASSWORD WITH HASH
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
        },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
        }
    },
    sequelize,
    timestamps: true,
    underscored: true,
    tableName: 'users',
    modelName: 'User',
  }
);


module.exports = User;
