// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const fs = require("fs");
const express = require("express");
var path = require("path");
// const app = require("./assets/js/app.js");
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
// Cerating express server
// Port setup
var app = express();
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    reservations.push(newNote);
    db.json(newNote);
});
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
console.log("Server is starting...")
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

fs.writeFile("db.json", data, (err) => {
    if (err) throw err;
    console.log("Congrats! The file has been saved!");
  });

  