// models/link.js
module.exports = (sequelize, DataTypes) => {
    const Link = sequelize.define('Link', {
      link: {
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
      tableName: 'links',
      timestamps: false,
    });
  
    return Link;
  };
  