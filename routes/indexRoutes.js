const express = require('express');
const router = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const withAuth = require('../utils/auth');

const { User, Stuff, Comment } = require('../models');

const sequelize = require('../config/connection');

// Index page
router.get('/judgemystuff', (req, res) => { 
  res.render('login');
});
// Login Page (GET)
router.get('/judgemystuff/login', (req, res) => {
  res.render('login', { root: './views'});
});

// Login Page (POST)
router.post('/judgemystuff/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'USER NOT FOUND' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'USER NOT FOUND' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/judgemystuff/signup', (req, res) => {
  res.render('signup', { root: './views'});
});

router.post('/judgemystuff/signup', async (req, res) => {
  const newuser = await User.create ({
    name: req.body.username,
    email: req.body.email,
    city: req.body.city,
    password: req.body.password,
  });
  {
    if (!newuser) {
      res.json(newuser);
    } 
    return res.redirect('/judgemystuff/login');

  }

});
  
router.get('/judgemystuff/profile-page', withAuth, async (req, res) => {
  let users = await User.getAttributes(({ plain: true }), {
    include: [
      {
        model: User,
        attributes: ['name', 'email', 'city']
      },
    ],
  }); 
  res.render('profile-page', { root: './views'});
});

router.post('/judgemystuff/profile-page', withAuth, async (req, res) => {
  try {
    const newProfile = await User.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.render('profile-page', { users: result });
  } catch (err) {
    res.status(404)
  }
  
});

router.get('/judgemystuff/review-page', withAuth, (req, res) => {
  res.render('review-page', { root: './views'});
});

router.post('/judgemystuff/review-page', withAuth, (req, res) => {
  res.render('review-page', { root: './views'});
});

router.get('/judgemystuff/create-stuff', withAuth, (req, res) => {

  res.render('create-stuff', { root: './views'})

});

router.post('/judgemystuff/create-stuff', withAuth, (req, res) => {

  res.render('create-stuff', { root: './views'})
});

// to remember!!
// router.get('/dummy', (req, res) => {
// Stuff.find(1)
// res.render('profile-page', {
// 
// });
// })

module.exports = router;
