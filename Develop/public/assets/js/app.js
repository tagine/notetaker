const express = require("express");
const fs = require("fs");

fs.writeFile("db.json", data, (err) => {
    if (err) throw err;
    console.log("Congrats! The file has been saved!");
  });
