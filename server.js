const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

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

app.listen(3001, () => {
    console.log("app listening on http://localhost:3001/")
})