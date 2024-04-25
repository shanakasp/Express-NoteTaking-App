const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/go", (req, res) => {
  res.send("Go World! ");
});

app.get("/time", (req, res) => {
  res.send(`<h1>${Date()}</h1>`);
});

app.get("/notes", (req, res) => {
  res.reder("notes.ejs", {
    notes,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// npm i -D nodemon to install nodemon as a dev dependency
const notes = [
  {
    id: 1,
    title: "sample test",
    timestamp: Date.now(),
    contents: "sample content",
  },

  {
    id: 2,
    title: "sample test w",
    timestamp: Date.now(),
    contents: "sample content 2",
  },
];
