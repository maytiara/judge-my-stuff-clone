const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Stuff = require('./Stuff');
const User = require('./User');

class Comment extends Model {   
}

Comment.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id', // Added: to define FK
            } 
        },
        stuff_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Stuff,
                key: 'id', // Added: to define FK
            }    
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,

        // -- Added this Part (May)
        updatedAt: false, // this will remove the updatedAt column
        tableName: "comments",
        modelName: 'Comment',
    }
);
      
module.exports = Comment;
      