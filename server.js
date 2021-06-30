const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

const databaseUrl = "workout";
const collections = ["worksouts"];
const db = mongojs(databaseUrl, collections)

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
    console.log("database error:", error);
});

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(3001, () => {
    console.log("app listening on http://localhost:3001/")
})