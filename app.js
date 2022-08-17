const express = require('express'); // npm

const app = express(); //
const PORT = process.env.PORT || 3001; //localhost port


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening 🚀'));
});
