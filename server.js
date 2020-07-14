//add other npm modules used here----------------------
let express = require("express");
let session = require("express-session");
let passport = require("passport");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");

//import database models here--------------------------
let db = require("./models");

//renames express function to app
let app = express();

//set our port
let PORT = process.env.PORT || 5000;

//code for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public-sam"));

//code for passport.js (user profile and login)--------------------------------
app.use(session({ secret: "beeyoutiful", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//import routes here-----------------------------------
app.use(routes);

//sync to mongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bzb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});