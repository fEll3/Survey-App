const express = require("express");
const app = express();

// route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// use enviroment Port or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// http://localhost:5000/
