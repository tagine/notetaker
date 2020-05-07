const express = require("express");
const API = require("./routes/API");
const html = require("./routes/html.js");
// const app = require("./assets/js/index.js");
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
// Cerating express server
// Port setup
const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", API);
app.use("/", html);

//app.listen(PORT, () => console.log(`were working on port: ${PORT}`));


// app.post("/api/notes", function(req, res) {
//     var newNote = req.body;
//     notes.push(newNote);
//     db.json(newNote);
// });



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

  