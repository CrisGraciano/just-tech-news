const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };

// this file is responsible is for importing the user model and exporting an object with it as a property