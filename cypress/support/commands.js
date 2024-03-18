// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToMagento',()=> {
    
    cy.visit("/customer/account/login/");
    cy.get("#email").type("CypressUser@gmail.com");
    cy.get("#pass").type("test@123");
    cy.get("#send2").click();
})

Cypress.Commands.add('Login', ()=> {
    cy.visit("https://admin-demo.nopcommerce.com/login");
    cy.get("#Email").clear().type("admin@yourstore.com");
    cy.get("#Password").clear().type("admin");
    cy.get(".login-button").click();
})