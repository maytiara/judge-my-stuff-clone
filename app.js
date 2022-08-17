const path = require('path');
const express = require('express'); // npm 
//const routes = require('./routes');
// const mysql = require('mysql2');
const exhbs= require('express-handlebars');

const fileUpload = require('express-fileupload'); // npm to upload files
const sequelize = require('./config/connection');

const app = express(); //
const PORT = process.env.PORT || 3001; //localhost port

// default options  ---express-fileupload----
app.use(fileUpload());

// Express middleware
// Static files: required for express -> to call the files inside the public folder
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname,'public')));

// this connects to the ./routes folder --to route the request
//app.use(routes);

// template for handlebars ./view
// Inform Express.js on which template engine to use
app.engine('hbs', exhbs.engine({ extname: '.hbs'})); // inside the { is the option property }
app.set('view engine', 'hbs');

// this is the router
app.get('', (req, res) => {
  res.render('index');


});


// next route, POST ---express-fileupload----
app.post('', (req, res) => {
  let sampleFile;
  let uploadPath;

  if(!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded'); // this will return when the user didn't upload any files
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/upload/' + sampleFile.name; // uploadPath directory


  console.log(sampleFile); // you can omit the comment to see on your console log the mv property key value:

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File Uploaded'); // it will send the message, once the user upload the folder
  });
});

// turn on connection server
sequelize.sync({ force: false }).then
(() => {
  app.listen(PORT, () =>
    console.log('Now listening 🚀'));
});
