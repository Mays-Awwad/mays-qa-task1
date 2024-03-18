//<reference type="cypress" />

describe("practices", ()=> {
    before( ()=> {
        cy.log("Hi from before") 
    });

    beforeEach(()=>  {
        //cy.log("Hi from brforeeach execute each test case")
        cy.visit("/customer/account/create/");
        
    });

    it("verify that all fields,titles and buttons are visible in create an account page", ()=> {
       // cy.visit("/customer/account/create/");
        cy.contains("span","Create New Customer Account");
        cy.get(".label").find("span").contains("Last Name").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.contains("Sign-in Information");
        cy.get(".label").find("span").contains("Password").should("be.visible");
        cy.get("#password-strength-meter-label").should("be.visible");
        cy.get("span").contains("Email").should("be.visible");

        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")
        //to check all fields are required

        cy.get(".submit").contains("Create an Account").should("be.visible");

    });


    it("verify the happy scenario of creating a new account",()=> {
        const emailNum=Math.floor(Math.random()*8);
        //cy.visit("/customer/account/create/");
        cy.get("#firstname").type("Mays");
        cy.get("#lastname").type("Awwad");
        cy.get("#email_address").type("qaysawwad"+emailNum+"@gmail.com");
        cy.get("#password").type("MaysAwwad@123.");
        cy.get("#password-confirmation").type("MaysAwwad@123.");
        cy.get(".submit").contains("Create an Account").click();

        cy.wait(1000)

        //Assertion
        cy.get("[role=alert]").should("be.visible").and("contain","Thank you for registering with Main Website Store");
        cy.get(".page-title").should("contain","My Account");
        //cy.get(".logged-in").first().should("contain","Welcome, Mays Awwad! ");
    })
        
    afterEach(() => {
        cy.log("Hi from aftereach execute a test case")
    });

    });

    

        