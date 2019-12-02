// import React from 'react';
// import { Route, Redirect } from 'react-router';
// import App from './components/App';
// import Login from './components/views/Login';
// import Room from './components/views/Room';
// import Chat from './components/views/Chat';




// export default (
//   <Route path='/' component={App}>
//     <Redirect component={Login} />
//     <Route path='/Login' component={Login} />
//     <Route path='/waitingRoom/success' component={Room} />
//     <Route path='/game/:gameID' component={Chat} />
//     <Route path='*' component={Login} />
//   </Route>
// );

// const path = require("path");
// const restrict = require("./../config/middleware/isAuthenticated");
// // app.get('/route-with-restricted-access', restrict, function(res, res, next) {
// //   // Handle request...
// // });
// // http://toon.io/understanding-passportjs-authentication-flow/
// // http://toon.io/on-passportjs-specific-use-cases/
// module.exports = function (app) {

//   app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));

//   });

//   app.get("/Login", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });
//   // app.get("/WaitingRoom", function(req, res) {
//   //   res.sendFile(path.join(__dirname, "../public/login.html"));
//   // });


//   // app.get("/login/incorrect_password", function(req, res) {
//   //   res.sendFile(path.join(__dirname, "../public/incorrect.html"));
//   // });

//   app.get("/waitingroom/success", restrict, function (req, res, next) {
//     res.sendFile(path.join(__dirname, "../public/waitRoom.html"));

//   });

//   app.get("/game/:gameID", restrict, function (req, res) {
//     console.log("game redirect")
//     res.sendFile(path.join(__dirname, "../public/gameroom.html"));
//   });



// };

// const db = require("../models");
// const passport = require("passport");
// require("./../config/passport");
// require("./../config/middleware/isAuthenticated.js");
// // require("./../config/passport")(passport);


// module.exports = function (app) {

//   app.post("/register", function (req, res) {
//     const {
//       email2,
//       first,
//       last,
//       password
//     } = req.body;

//     db.Login.findOne({
//       where: {
//         email: email2
//       }
//     }).then((user) => {
//       if (user) {
//         console.log("user exists")
//         return
//       } else {
//         db.Login.create({
//             email: email2,
//             firstName: first,
//             lastName: last,
//             password: password,

//           })
//           .then(function (dbLogin) {

//           })
//         console.log("new user created");
//         res.status(201).end();
//       }
//     });

//   });

//   app.post('/login',
//     passport.authenticate('local', {
//       failureRedirect: '/login'
//     }),
//     function (req, res, next) {
//       db.Login.update({
//           loginStatus: "signedON"
//         }, {
//           where: {
//             email: req.body.email
//           }
//         })
//         .then(function (rowsUpdated) {
//           res.redirect("/waitingroom/success")
//         })
//         .catch(next)

//     });





//   app.get("/logout", function (req, res) {
//     // would need to include the username on the logout button to change login status... leaving it like it is for now.

//     req.logout();
//     res.redirect('/');


//   });

//   app.post("/newgame", function (req, res, err) {

//     const {
//       gameID,
//       email
//     } = req.body;
//     console.log(gameID);


//     db.Tables.findOne({
//       where: {
//         gameID: gameID,
//       }
//     }).then((game) => {
//       if (game) {
//         console.log("game exists")
//         return res.end()
//       } else {
//         db.Tables.create({
//             gameID: gameID,
//             Player1: email


//           })
//           .then(function (dbTables) {
//             console.log(`new game created ID : ${gameID}`);
//             res.send("/game/" + gameID);
//             //first time using back ticks


//           })







//       }



//     })


//   })
// }