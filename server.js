//add other npm modules used here----------------------
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");
const db = require("./models");
const cors = require("cors");

//renames express function to app
const app = express();

//set our port
let PORT = process.env.PORT || 5000;

//code for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public-sam"));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
  }))

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