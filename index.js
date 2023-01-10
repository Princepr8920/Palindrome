const express = require("express"),
  app = express(),
  path = require("path");
  require("dotenv").config()

 const port = process.env.PORT 
app.use(express.static(path.join(__dirname, "./public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port || 2500, (err) => {
  if (err) return console.error(err);
  console.log(`Server started successfully on PORT : ${port || 2500} ✔`);
});
