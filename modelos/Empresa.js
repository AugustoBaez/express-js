import { faker } from '@faker-js/faker';
module.exports = class Empresa {
    constructor() {
        this.name = faker.company.name()
        this.street = faker.address.name()
        this.city = faker.address.city()
    }
}