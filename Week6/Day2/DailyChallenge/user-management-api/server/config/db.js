const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_management', 'username', '12345678', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
