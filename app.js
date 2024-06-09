const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Все супер! https://github.com/bodik87/server");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ All is ok! Server is running on port ${PORT}`);
});
