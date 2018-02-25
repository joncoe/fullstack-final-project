const express = require("express");
const PORT = 8080;

const todos = [];

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello, world! " });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
