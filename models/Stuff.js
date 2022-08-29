const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Stuff extends Model {   
}

Stuff.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, // TODO: CHANGE THIS?
            references: {
                model: User,
                key: 'id',
            }
            // -- Added this Part (May)

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Added for the description
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
      sequelize,
      timestamps: true,
      // freezeTableName: true,
      tableName: "stuffs",
      underscored: true,

      // -- Added this Part (May)
      updatedAt: false, // this will remove the updatedAt column
			
      modelName: 'Stuff',
    }
);
      
module.exports = Stuff;
      