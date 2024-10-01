// models/project.js
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'projects',
      timestamps: false, // Disable automatic timestamps since you're using custom names
    });
  
    Project.associate = (models) => {
      Project.hasMany(models.Link, {
        foreignKey: 'projectId',
        as: 'links',
      });
      Project.hasMany(models.Component, {
        foreignKey: 'projectId',
        as: 'components',
      });
      Project.hasMany(models.Tag, {
        foreignKey: 'projectId',
        as: 'tags',
      });
    };
  
    return Project;
  };
  