const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect to mongo db using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact")

//use routes defined in the imported routes folder
app.use(routes)

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
