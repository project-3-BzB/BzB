//add other npm modules used here----------------------
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");

//renames express function to app
const app = express();

//set our port-------------------------------------------
let PORT = process.env.PORT || 5000;

//logger for the terminal----------------------------------------------
app.use(logger("dev"));

//code for express---------------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public-sam"));

//cors-----------------------------------------------------------------
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
  }))


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//sync to mongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bzbbackend", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//code for passport.js (user profile and login)--------------------------------
app.use(session({ secret: "beeyoutiful", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

//import routes here-----------------------------------
app.use(routes);

//session info----------------------------------------------
app.use( (req, res, next) => {
    console.log('req.session', req.session);
    return next();
});

//start server----------------------------------------
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

//TESTING DATABASE AND ROUTES
const axios = require("axios");

//test databse on mongo terminal - https://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections
//---USER 1 Signup---
// axios.post("http://localhost:5000/api/user/signup", {
//     email: "abc@def.com",
//     username: "again",
//     password: "12345"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })

//---USER 1 Login---
// axios.post("http://localhost:5000/api/user/login", {
//     username: "again",
//     password: "12345"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })

//---USER 2 Signup---
// axios.post("http://localhost:5000/api/user/signup", {
//     email: "123@45sadas6.com",
//     username: "",
//     password: "12345"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })

//---USER 2 Login---
// axios.post("http://localhost:5000/api/user/login", {
//     username: "haha",
//     password: "12345"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })

// axios.post("http://localhost:5000/api/folder/create", {
//     name: "Test"
// }).then(function(res){
//     // console.log(res)
// }).catch(function(err){
//     // console.log(err)
// });