const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
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

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;