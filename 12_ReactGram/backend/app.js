require("dotenv").config()

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

// cors
app.use(cors({credentials: true, origin: "http://localhost:5173"}));

// Diretório de Upload
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Conexão com o Banco de Dados
require("./config/db.js")

// routes
const router = require("./routes/Router.js")

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});