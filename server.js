//reqs/imports----------------------------------------------------
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");

//renames express function to app
const app = express();

//set our port----------------------------------------------------
let PORT = process.env.PORT || 5000;

//logger for the terminal-----------------------------------------
app.use(logger("dev"));

//code for express------------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public-sam"));

//cors------------------------------------------------------------
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
  }))

//sync to mongoDB using mongoose----------------------------------
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bzbbackend", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//code for passport.js (user profile and login)-------------------
app.use(session({ secret: "beeyoutiful", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

//import routes here----------------------------------------------
app.use(routes);

//session info----------------------------------------------------
app.use( (req, res, next) => {
    console.log('req.session', req.session);
    return next();
});

//start server----------------------------------------------------
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

//TESTING DATABASE AND ROUTES
const axios = require("axios");

//USERS-----------------------------------------------------------
//---User Signup---
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
// });

//---User Login---
// axios.post("http://localhost:5000/api/user/login", {
//     username: "again",
//     password: "12345"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Get User---
// axios.get("http://localhost:5000/api/user/[user._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//FOLDERS---------------------------------------------------------
//---Create Folder---
// axios.post("http://localhost:5000/api/user/5f151e208013d9550845af33/new_folder", {
//     name: "Test"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Get Folder---
// axios.get("http://localhost:5000/api/folder/[folder._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Update Folder---
// axios.put("http://localhost:5000/api/folder/[folder._id]", {
//     name: "HELLO WORLD"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Delete Folder---
// axios.delete("http://localhost:5000/api/folder/[folder._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//NOTES-----------------------------------------------------------
//---Create Note---
// axios.post("http://localhost:5000/api/folder/5f153359ee5fee4ebcf1a130/new_note", {
//     title: "Test",
//     content: "Hello world"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Get Note---
// axios.get("http://localhost:5000/api/note/5f1533856d6c5647b879f739")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Update Note---
// axios.put("http://localhost:5000/api/note/5f1533856d6c5647b879f739", {
//     title: "Update",
//     content: "Testing"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Delete Note---
// axios.delete("http://localhost:5000/api/note/5f1533856d6c5647b879f739")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });



//MOCK USERS------------------------------------------------------
//---USER 2 Signup---
// axios.post("http://localhost:5000/api/user/signup", {
//     email: "123@456.com",
//     username: "123456",
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
//     username: "123456",
//     password: "12345"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })

//---USER 3 Signup---
// axios.post("http://localhost:5000/api/user/signup", {
//     email: "does@it.com",
//     username: "really",
//     password: "worktho"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })

//---USER 3 Login---
// axios.post("http://localhost:5000/api/user/login", {
//     username: "really",
//     password: "worktho"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })