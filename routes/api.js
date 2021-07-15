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


module.exports = router;