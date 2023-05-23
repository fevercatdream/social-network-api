const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // drop existing users
    await User.deleteMany({});

    // drop existing thoughts
    await Thought.deleteMany({});

    // insert seed users
    await User.collection.insertMany(users);

    // insert seed thoughts
    await Thought.collection.insertMany(thoughts);

    console.info('Seeding complete! 🌱');
    process.exit(0);
});