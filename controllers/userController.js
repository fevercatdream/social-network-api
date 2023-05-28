const { User, Thought, Reaction } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            // .select()
            .then((user) =>
                !user
                    ? res.status(404).json({ message: `No user with that ID` })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));        
    },
    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res
                    .status(404)
                    .json({ message: `No user with that ID` })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // delete a user and associated thoughts
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => 
            !user
                ? res
                    .status(404)
                    .json({ message: `No user with that ID` })
                : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: `User and associated thoughts deleted!` }))
            .catch((err) => res.status(500).json(err));        
    },
    // add a friend to a user
    addFriend(req, res) {
        console.log(`You are adding a friend`);
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }        
        )
            .then((user) => 
                !user
                    ? res
                        .status(404)
                        .json({ message: `No user found with that ID` })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    // remove a friend from a user
    removeFriend(req, res) {
        console.log("req.params.userId: ", req.params.userId);
        console.log("req.params.friendId: ", req.params.friendId);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { _id: req.params.friendId } } },
            { runValidators: true, new: true }
        )
            .then((user) => 
                !user
                    ? res
                        .status(404)
                        .json({ message: `No user found with that ID` })
                    : res.json(user)    
            )
            .catch((err) => res.status(500).json(err));
    },
};