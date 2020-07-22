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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//sync to mongoDB using mongoose
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
// const axios = require("axios");

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

// ---User Login---
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

//---User Logout---
// axios.get("http://localhost:5000/api/logout")
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
// axios.post("http://localhost:5000/api/user/[user_id]/new_folder", {
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
// axios.delete("http://localhost:5000/api/folder/delete/[user._id]/[folder._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//NOTES-----------------------------------------------------------
//---Create Note---
// axios.post("http://localhost:5000/api/folder/[folder._id]/new_note", {
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
// axios.get("http://localhost:5000/api/note/[note._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Update Note---
// axios.put("http://localhost:5000/api/note/[note._id]", {
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
// axios.delete("http://localhost:5000/api/note/delete/[folder._id]/[user._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//TASKS----------------------------------------------------------------
// ---Create Task---
// axios.post("http://localhost:5000/api/folder/[folder._id]/new_task", {
//     title: "Test",
//     content: "Hello world",
//     year: "2020",
//     month: "1",
//     day: "1",
//     hour: "14",
//     minute: "30",
//     isComplete: false
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Get Task---
// axios.get("http://localhost:5000/api/task/[task._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Update Task---
// axios.put("http://localhost:5000/api/task/[task._id]", {
//     title: "Update",
//     content: "Testing",
//     year: "2025",
//     month: "5",
//     day: "30",
//     hour: "12",
//     minute: "30",
//     isComplete: true
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Delete Task---
// axios.delete("http://localhost:5000/api/task/delete/[folder._id]/[task._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//IMAGES----------------------------------------------------------------
// ---Create Image---
// axios.post("http://localhost:5000/api/folder/[folder._id]/new_image", {
//     title: "Test",
//     content: "Hello world"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Get Image---
// axios.get("http://localhost:5000/api/image/[image._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Update Image---
// axios.put("http://localhost:5000/api/image/[image._id]", {
//     title: "Update",
//     content: "Testing"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Delete Image---
// axios.delete("http://localhost:5000/api/image/delete/[folder._id]/[image._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//LINKS-----------------------------------------------------------
// ---Create Link---
// axios.post("http://localhost:5000/api/folder/[folder._id]/new_link", {
//     title: "Test",
//     content: "Hello world"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Get Link---
// axios.get("http://localhost:5000/api/link/[link._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Update Link---
// axios.put("http://localhost:5000/api/link/[link._id]", {
//     title: "Update",
//     content: "Testing"
// })
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//---Delete Link---
// axios.delete("http://localhost:5000/api/link/delete/[folder._id]/[link._id]")
// .then(function(res) {
//     // console.log(res)
// })
// .catch(function(err) {
//     // console.log(err)
// });

//OTHER MOCK USERS------------------------------------------------------
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
