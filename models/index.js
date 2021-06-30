const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    day: Date,
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number,
    }]
});

module.exports.Workout = mongoose.model('Workout', workoutSchema);