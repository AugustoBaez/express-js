const express = require("express");
const app = express();
let { faker } = require("@faker-js/faker");

class Empresa {
    constructor() {
        this.nombre = faker.company.name()
        this._id = faker.datatype.uuid();
        this.direccion = {
            calle: faker.address.street(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            zip: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.numero = faker.phone.phoneNumber()
    }
}

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
