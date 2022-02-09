const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // columns will go here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      // What needs to go here?
    user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
                model: 'user',
                key: 'id'
            }
    },
    post_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            // this means the password must be at least four characters long
            len: [1]
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;