const express = require("express");
const app = express();
const Usuario = require("./modelos/Usuario");
const Empresa = require("./modelos/Empresa");

console.log(new Usuario());

app.get("/api/users/new", (req, res) => {
    res.json(new Usuario());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Empresa());
});

app.get("/api/users/company", (req, res) => {
    res.json({ usuario: new Usuario(), empresa: new Empresa() });
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
