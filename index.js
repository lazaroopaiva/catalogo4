const express = require("express");
const { appendFile } = require("fs");
require("dotenv").config();
const path = require("path");

const app = express();
const routes = require("./src/routers/routes");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
const port = process.env.PORT || 2000

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));




