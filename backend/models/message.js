// models/message.js
module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      body: {
        type: DataTypes.TIME, // Assuming 'body' is a time
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'messages',
      timestamps: false,
    });
  
    return Message;
  };
  