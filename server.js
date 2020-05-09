const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey there!");
});

const PORT = 3001;
app.listen(PORT, () => console.log(`server running by ${PORT} port...`));
