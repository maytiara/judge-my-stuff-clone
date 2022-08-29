const path = require('path');
const express = require('express'); // npm 
//const db = require('mysql2');
const exhbs= require('express-handlebars'); 
// const routes = require('./controllers/upload-routes')
const sequelize = require('./config/connection');
const cloudinary = require('cloudinary').v2; // declare it later..

const session = require('express-session'); // required for session.Store
// const router = require('./routes/indexRoutes');
const SequelizeStore = require('connect-session-sequelize')(session.Store); // required for const = sess
const bodyParser = require('body-parser');

// Added npm, this requires to use the cookie-sessions.
// Source: Wk14,mini-proj (line 9, 17-27)
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  
  store: new SequelizeStore({
    db: sequelize
  }) 
 
};

const app = express(); //
app.use(session(sess)); // to initiate the const sess
const PORT = process.env.PORT || 3001; //localhost port

// Express middleware
// Static files: required for express -> to call the files inside the public folder
app.use(express.json());
app.use(express.urlencoded({ extended:true })); // to Parse URL data from any form
app.use(express.static(path.join(__dirname,'public')));

// this connects to the ./routes folder --to route the request
// Need to define the routes
app.use(require('./routes/cloudinary-routes'));
app.use('/userRoutes', require('./routes/web/userRoutes')); // middleware for login.hbs

app.use('/', require('./routes/indexRoutes')); // middleware for the rest of the routes
//app.use('/', require('./routes/signupRoutes')); // middleware for the rest of the routes

app.use(bodyParser.urlencoded({ extended: true }));

//Handlebars middleware
// Inform Express.js on which template engine to use
app.engine('hbs', exhbs.engine({ extname: '.hbs'})); // inside the { config }
app.set('view engine', 'hbs');
app.use(express.static('./public/images'));

// turn on connection server
sequelize.sync({ force: false }).then 
(() => {
  app.listen(PORT, () =>
    console.log('Now listening 🚀'));
});