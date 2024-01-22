import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname+ "/public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname+ "/public/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname+ "/public/contact.html");
});

app.get("/login", (req,res) => {
  res.sendFile(__dirname + "/public/login.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});