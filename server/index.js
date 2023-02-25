// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/server-loaded", (req, res) => {
    res.json({ message: "Welcome to Autophy!" });
});

app.get("/home", (req, res) => {
    res.json({ message: "request-home" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});