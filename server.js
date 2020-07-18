//add other npm modules used here----------------------
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");
const db = require("./models");
const cors = require("cors");

//renames express function to app
const app = express();

//set our port
let PORT = process.env.PORT || 5000;

//logger
app.use(logger("dev"));

//code for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public-sam"));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
  }))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//sync to mongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bzb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//code for passport.js (user profile and login)--------------------------------
app.use(session({ secret: "beeyoutiful", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
require("./config/passport");
app.use(passport.session());

//import routes here-----------------------------------
app.use(routes);

//start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

//TESTING DATABASE AND ROUTES
const axios = require("axios");

//test databse on mongo terminal - https://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections

// axios.post("http://localhost:5000/api/user/signup", {
//     email: "blah@blah.com",
//     username: "Blahblah",
//     password: "blahblah"
// })

// axios.post("http://localhost:5000/api/user/login", {
//     username: "Blahblah",
//     password: "blahblah"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// })

// axios.post("http://localhost:5000/api/folder/create", {
//     name: "Test 2"
// }).then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.log(err)
// });
