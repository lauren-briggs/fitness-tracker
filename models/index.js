const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
    }]
});

module.exports.Workout = mongoose.model('Workout', workoutSchema);