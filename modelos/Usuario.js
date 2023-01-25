import { faker } from '@faker-js/faker';

module.exports = class Usuario {
    constructor() {
        this.name = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
    }
}