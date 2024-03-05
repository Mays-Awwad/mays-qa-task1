//<reference type="cypress" />

describe("task1", ()=> {

    it("cypress-test1", ()=> {

        cy.visit("/#/register")
        cy.get('[placeholder="Username"]');
        cy.get("input.ng-valid-email");
        cy.get('[type="password"]');
        cy.contains("button","Sign up");
        cy.contains("h1","Sign up")
        cy.get("p > a").first();
        cy.get("a.navbar-brand");
        // or cy.get(".container a").contains("conduit");
        cy.get(".logo-font");
        cy.get(".logo-font").next();
        cy.get(".nav-item").find(".nav-link").contains("Home");
        cy.get(".pull-xs-right a").eq(2);

    })
})