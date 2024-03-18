//<reference type="cypress" />

describe("delete the product functionality", ()=> {
    before( ()=> {
        cy.Login();

    })
    it("delete product", () =>{
        cy.get("#nopSideBarPusher").click();
        cy.get("a.nav-link").contains("Catalog").click({force:true});
        cy.contains("P","Products").click({force:true});
        cy.wait(1000);
        cy.get("#SearchProductName").type("Laptop123");
        cy.contains("button","Search").click();
        cy.wait(1000);
        cy.get(".text-center").find("input.checkboxGroups").check("69");
       //cy.get("input.checkboxGroups").check({force:true});
        cy.get("#delete-selected").click();
        //cy.get("#delete-selected-action-confirmation-title").should("contain","Are you sure?")
        cy.get(".modal-content .modal-header").should("contain","Are you sure?")
        cy.get("button[type='submit']").contains("Yes").click({force:true});
        cy.get(".dataTables_empty").should("contain","No data available in table");
    })
})