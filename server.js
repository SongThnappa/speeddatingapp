//boilerplate code at this point. should work....not loading my config file until I properly hide my local password in a keys/env scheme
//have to go back to my handlebars hw for that
//https://github.com/kelektiv/node.bcrypt.js/wiki/Installation-Instructions
const express = require("express");
const passport = require("passport");
require("./config/passport");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyparser=require("body-parser");
const cookieParser = require('cookie-parser')
const db = require("./models");
const path = require("path")
var cors = require('cors')




app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

// for security this needs to be set
// https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it
app.set('trust proxy', 1) 
app.use(cookieParser())
app.use(session({
  secret: process.env.LOCAL_SECRET_COOKIE,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge : 7200000 } 
  
}))

// app.use(express.cookieParser("Secret123"));
// app.use(express.session({   store: sessionStore,
//                         cookie: { maxAge : 3600000 } //1 Hour
//                         }));


app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes")(app);
require("./routes/html-routes.js")(app);
require("./routes/socket");
// require("./config/passport.js")(passport);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
