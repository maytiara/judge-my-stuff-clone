const User = require('./User');
const Stuff = require('./Stuff');
const Comment = require('./Comment');

// 1 user has many stuff
User.hasMany(Stuff, {

  // Define an alias for when data is retrieved
  // as: ''
});

// 1 stuff can only belong to a user
Stuff.belongsTo(User, {
  foreignKey: 'user_id'
  // Define the third table needed to store the foreign keys

  // Define an alias for when data is retrieved
  // as: ''
});

Stuff.hasMany(Comment, {
  // 1 stuff can have many comments
});

Comment.belongsTo(Stuff, {
  
});

// 1 comment only  blongs to 1 stuff



module.exports = { User, Stuff, Comment };
