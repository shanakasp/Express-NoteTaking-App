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

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// npm i -D nodemon to install nodemon as a dev dependency
