// models/component.js
module.exports = (sequelize, DataTypes) => {
    const Component = sequelize.define('Component', {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
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
      tableName: 'components',
      timestamps: false,
    });
  
    return Component;
  };
  