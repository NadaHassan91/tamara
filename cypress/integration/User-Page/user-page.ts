import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import exp = require('constants');



let baseUrl = 'https://www.abibliadigital.com.br/api/';


When(/^user makes books listing request successfully$/, function () {

    cy.request({
        method: 'GET',
        url: baseUrl+"books",
        headers: {
            'accept': 'application/json'
        }
    }).then((response: any) => {
        assert.equal(response.status, 200);

    });
});
When(/^user makes book request successfully$/, function () {
    cy.request({
        method: 'GET',
        url: baseUrl+"books/mt",
        headers: {
            'accept': 'application/json'
        }
    }).then((response: any) => {
        assert.equal(response.status, 200);

    });
});
let token;
When(/^user makes the create user api with valid data$/, function () {
    cy.request({
        method: 'POST',
        url: baseUrl+"users",
        headers: {
            'accept': 'application/json'
        },
        body:{
            "name": "Name",
            "email": "email@email.com",
            "password": "102030", // minimum size 6 digits
            "notifications": true // receive update emails from www.abibliadigital.com.br
        }
    }).then((response: any) => {
        assert.equal(response.status, 200);
        expect(response.body.name, "Name");
        expect(response.body.email, "email@email.com")
         token = response.body.token;

    });
    return token;
});

Then(/^user is created successfully$/, function () {
    cy.request({
        method: 'GET',
        url: baseUrl+"users/email@email.com",
        headers: {
            Authorization: token
        },

    }).then((response: any) => {
        assert.equal(response.status, 200);
        expect(response.body.name, "Name");
        expect(response.body.email, "email@email.com")


    });
});
When(/^user makes the delete user api$/, function () {
    cy.request({
        method: 'DELETE',
        url: baseUrl+"users",
        headers: {
            Authorization: token
        },
        body:{
            "email": "email@email.com",
            "password": "102030",
        }
    }).then((response: any) => {
        assert.equal(response.status, 200);
        expect(response.body, "User successfully removed");

    });
});
Then(/^user is deleted successfully$/, function () {
    cy.request({
        method: 'GET',
        url: baseUrl+"users/email@email.com",
        headers: {
            Authorization: token
        },

    }).then((response: any) => {
        assert.equal(response.status, 400);
        expect(response.body, "User doesn't exist");

    });
});
When(/^user makes the create user api with invalid data$/, function () {
    cy.request({
        method: 'POST',
        url: baseUrl+"users",
        headers: {
            'accept': 'application/json'
        },
        body:{
            "name": "Name",
            "email": "email@email.com",
            "password": "123", // minimum size 6 digits
            "notifications": true // receive update emails from www.abibliadigital.com.br
        }
    }).then((response: any) => {
        assert.equal(response.status, 404);
        expect(response.body, "password minimum size 6 digits")

    });

});
Then(/^user is not created and validation message is returned$/, function () {
    cy.request({
        method: 'GET',
        url: baseUrl+"users/email@email.com",
        headers: {
            Authorization: token
        },

    }).then((response: any) => {
        assert.equal(response.status, 400);
        expect(response.body, "User doesn't exist");

    });
});