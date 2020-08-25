const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add routes, both API and view
app.use(routes);

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/openforums", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
