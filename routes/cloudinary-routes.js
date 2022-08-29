const { upload } = require('../config/cloudinary');
const fileUpload = require('express-fileupload'); // npm to upload files
const Stuff = require('../models/Stuff');
const router = require('express').Router();

// default options  ---express-fileupload----
router.use(fileUpload({
    useTempFiles: true,
  })
);

// next route, POST ---express-fileupload----
// changed POST method 
router.post('/judgemystuff/create-stuff', async (req, res) => {

  // TODO: expect user to pass in title
  // req.files.image
  console.log(req.body);
  
  if(!req.files) return 
  res.redirect('Please upload an image');

  const { image } = req.files;
  const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const kiloBytes = 1000;

  const maxSizeInKb = 1000;

  if (!fileTypes.includes(image.mimetype)) return res.send('Image formats supported: JPG, PNG, JPEG, PNG');

  // limit size of image
  if (image.size / kiloBytes > maxSizeInKb) return res.send(`Image size must be less than ${maxSizeInKb}kb`);

  const cloudFile = await upload(image.tempFilePath);
  console.log(cloudFile);


  // retrieve cloudinary url
  // TODO: create new Stuff
  // store it to db
  
  const created = await Stuff.create({
    // ...
    user_id: req.session.user_id, // get this from req.session
    title: req.body.title,
    description: req.body.description,
    photo_url: req.body.cloudFile.url,
  })


  return res.redirect('/judgemystuff/create-stuff');
})

module.exports = router;