//<reference type="cypress" />

describe("Add the product functionality", ()=> {
    before( ()=> {
        cy.Login();
    })
    it("Add new product to the products page", () =>{
        cy.get("#nopSideBarPusher").click();
        cy.get("a.nav-link").contains("Catalog").click({force:true});
        cy.contains("P","Products").click({force:true});
        cy.wait(1000);
        cy.get(".float-right .btn-primary").contains("Add new").click();
        cy.get("#Name").type("Laptop123");
        
        cy.screenshot({capture:"runner"});
        cy.get(".k-multiselect.k-multiselect-clearable").first().click({force:true});
        cy.wait(1000);
        cy.get(".k-list.k-reset .k-item").contains("Computers").click({force:true});
        cy.get("#Price").prev().type("4000");
        cy.wait(1000);
        cy.contains("button","Save").click();
        cy.wait(1000);
        cy.get(".alert").should("be.visible").and("contain","The new product has been added successfully.");
        cy.get("h1.float-left").should("contain","Products")
    })
})
