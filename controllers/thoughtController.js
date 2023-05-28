const { User, Thought, Reaction } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            // .select()
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: `No thought with that ID` })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));        
    },
    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
                ? res
                    .status(404)
                    .json({ message: `No thought with that ID` })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // delete a thought and associated reactions
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    res
                        .status(404)
                        .json({ message: `No thought with that ID` })
                }else{
                    res.json({ message: `Thought and associated reactions deleted!` })
                }
            })
            .catch((err) => res.status(500).json(err));        
    },
    // add a reaction to a thought
    addReaction(req, res) {
        console.log(`You are adding a reaction`);
        console.log(req.body);
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }        
        )
            .then((thought) => 
                !thought
                    ? res
                        .status(404)
                        .json({ message: `No thought found with that ID` })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },
    // remove a reaction from a thought
    removeReaction(req, res) {
        console.log("req.params.thoughtId: ", req.params.thoughtId);
        console.log("req.params.reactionId: ", req.params.reactionId);
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) => 
                !thought
                    ? res
                        .status(404)
                        .json({ message: `No thought found with that ID` })
                    : res.json(thought)    
            )
            .catch((err) => res.status(500).json(err));
    },
};