// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const fs = require("fs");
const express = require("express");
const path = require("path");

// const app = require("./assets/js/app.js");
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
// Cerating express server
// Port setup
const app = express();
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
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

app.get("/readnotes", function(req, res) {
    try {
        let results = fs.readFileSync("db/db.json", 'utf8')
        console.log(results)
      } catch (err) {
        console.error(err)
      }
    res.json(notes);
  });

// app.post("/api/notes", function(req, res) {
//     var newNote = req.body;
//     notes.push(newNote);
//     db.json(newNote);
// });

app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var notes = req.body;
    console.log(notes);
    try {
        fs.appendFileSync("./db/db.json", JSON.stringify(notes))
      } catch (err) {
        console.error(err)
      }
    res.json(notes);
  });



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
console.log("Server is starting...")
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

// =============================================================================
// WRITE FILE METHOD
// Writes user input into JSON file (database) db.json
// =============================================================================

// fs.writeFile("db.json", data, (err) => {
//     if (err) throw err;
//     console.log("Congrats! User input has been saved in db.json!");
//   });

  