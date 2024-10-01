// models/tag.js
module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'projects', // Reference to the 'projects' table
          key: 'id',
        },
      },
    }, {
      tableName: 'tags',
      timestamps: false,
    });
  
    return Tag;
  };
  