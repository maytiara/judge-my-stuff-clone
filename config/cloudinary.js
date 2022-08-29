const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
cloud_name: process.env.CLOUD_NAME,
api_key: process.env.CLOUD_KEY,
api_secret: process.env.CLOUD_KEY_SECRET
});

// uploading into Test folder
const upload = async (file) => {
const image = await cloudinary.uploader.upload(
file,
{ folder: 'judge-my-stuff'},
(result) => result
);
return image;
};

module.exports = { upload };