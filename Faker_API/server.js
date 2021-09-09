const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

class User {
    constructor() {
        // this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        // this.id = `${faker.datatype.number()}`;
        this.name = faker.company.companyName();
        this.streetAddress = faker.address.streetAddress();
        this.cityName = faker.address.cityName();
        this.state = faker.address.stateAbbr();
        this.zipCode = `${faker.address.zipCode()}`;
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
    res.json( new User(), new Company() );
});

app.listen(port, () => console.log(`Listening on port: ${port}`));