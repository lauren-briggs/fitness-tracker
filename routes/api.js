const router = require("express").Router();
const path = require("path");

const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.find().then((dbData) => {
        res.json(dbData);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;