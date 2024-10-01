const express = require('express');
const { sequelize } = require('./models'); // Import Sequelize instance

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Sync models with database
sequelize.sync({ force: true }) // This will drop and recreate tables; remove 'force' in production
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
x