//<reference type="cypress" />
describe("CartFunctionality",()=>{
    before( ()=> {
        cy.loginToMagento();
    })

    beforeEach( ()=> {
        cy.visit("/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[option-id='53']").click();
        //cy.get("#product-addtocart-button").click();
        cy.get(".tocart").click();
         
        //Asertion
        cy.get("[role='alert']").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart.");
        cy.get(".counter-number").should("be.visible").and("contain","1");


    })

    //it("validate that the user can add product to cart", ()=> {
        //cy.get("#search").type("shirt"+"{enter}");
        //cy.contains("a","Circe Hooded Ice Fleece").click();
        //cy.get(".swatch-option.text").contains("M").click();
        //cy.get("[option-id='53']").click();
        //cy.get("#product-addtocart-button").click();
        //cy.get(".tocart").click();
         
        //Asertion
        //cy.get("[role='alert']").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart.");
        //cy.get(".counter-number").should("be.visible").and("contain","1");

   // })
    it("validate that the user can delete product from shopping cart", ()=> {

        cy.get(".showcart").click();
        //cy.contains("a","Remove").click();
        cy.contains("span","View and Edit Cart").click();
        cy.get(".action-delete").click();
        cy.get(".cart-empty").first().should("contain","You have no items in your shopping cart.");
        cy.get(".counter-number").should("be.hidden")

    })

    it.only("validate that the user can update products from the shopping cart .", ()=> {
        cy.get(".showcart").click();
        cy.contains("span","View and Edit Cart").click();
        cy.wait(1000)
        cy.get(".action-edit").click();
        //cy.get("[value='update_qty']").click();
        cy.get("[option-tooltip-value='S']").click();
        cy.get("[aria-label='Purple']").click();
        cy.get("#qty").clear().type("2");
        cy.contains("span","Update Cart").click();
        //Asertion
        cy.wait(1000);
        cy.get("[role='alert']").should("be.visible").and("contain","Circe Hooded Ice Fleece was updated in your shopping cart");




    })


})