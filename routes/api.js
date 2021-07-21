const router = require("express").Router();
const path = require("path");

const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.find().then((dbData) => {
        console.log(dbData)
        res.json(dbData);
    }).catch((err) => {
        res.json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {
    db.find().then((dbData) => {
        res.json(dbData);
    }).catch((err) => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
    db.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })

        .then((dbData) => {
            res.json(dbData);
        }).catch((err) => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    console.log(req.body);
    db.create(req.body).then((dbData) => {
        res.json(dbData);
    }).catch((err) => {
        res.json(err);
    });
});


router.get("/admin/seed", (req, res) => {
    const workoutSeed = [
        {
            day: new Date(new Date().setDate(new Date().getDate() - 9)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Bicep Curl',
                    duration: 20,
                    weight: 100,
                    reps: 10,
                    sets: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 8)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Lateral Pull',
                    duration: 20,
                    weight: 300,
                    reps: 10,
                    sets: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 7)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Push Press',
                    duration: 25,
                    weight: 185,
                    reps: 8,
                    sets: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 6)),
            exercises: [
                {
                    type: 'cardio',
                    name: 'Running',
                    duration: 25,
                    distance: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 5)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Bench Press',
                    duration: 20,
                    weight: 285,
                    reps: 10,
                    sets: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 4)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Bench Press',
                    duration: 20,
                    weight: 300,
                    reps: 10,
                    sets: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 3)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Quad Press',
                    duration: 30,
                    weight: 300,
                    reps: 10,
                    sets: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 2)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Bench Press',
                    duration: 20,
                    weight: 300,
                    reps: 10,
                    sets: 4,
                },
            ],
        },
        {
            day: new Date(new Date().setDate(new Date().getDate() - 1)),
            exercises: [
                {
                    type: 'resistance',
                    name: 'Military Press',
                    duration: 20,
                    weight: 300,
                    reps: 10,
                    sets: 4,
                },
            ],
        },
    ];

    db.Workout.deleteMany({})
        .then(() => db.Workout.collection.insertMany(workoutSeed))
        .then((data) => {
            console.log(data.result.n + ' records inserted!');
            res.json("done")
        })
        .catch((err) => {
            console.error(err);
            res.json(err)
        });

});


module.exports = router;