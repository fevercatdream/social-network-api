const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // drop existing users
    await User.deleteMany({});

    // drop existing thoughts
    await Thought.deleteMany({});

    const users = [];
    
    for (let i = 0; i < 20; i++) {
      const fullName = getRandomName();
      
      users.push({
        username: fullName,
        email: `${fullName.toLowerCase().replace(/ /g,"_")}@example.com`,
      });
    }    
    
    const thoughts = getRandomThoughts(3, users);

    // insert seed users
    await User.collection.insertMany(users);

    // insert seed thoughts
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});