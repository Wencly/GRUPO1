//Load HTTP module
const express = require("express");
// const http = require("http");
// const hostname = "127.0.0.1";
//usamos el archivo de configuracion
const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

const books = require("./routes/books");
const app = express();

//starting dbconection
const dbConnect = require("./database/mongodb");
dbConnect(url).catch((err) => console.log(err));

// parsing JSON
const { json } = require("body-parser");
app.use(json());

//Books API routes

app.get("/", (req, res) => {
  res.send("Grupo 1");
});
app.use("/api/books", books);

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port);
