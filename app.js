const express = require("express");
const router = require("./routes/Data");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/",router);

//app.post("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
