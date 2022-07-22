//visits homepage
describe("Home page testing", () => {
  it("Visits fairdata", () => {
    cy.visit("/");

    cy.get("[id^=swiper-wrapper]");
  });
});

//testing on the team page
describe("Meet the Team page", () => {
  it("Navigate to the team page", () => {
    cy.visit("/");

    cy.contains("Meet The Team").click();

    cy.url().should("include", "/team");
  });
});

//testing the contact us page
describe("Contact Us Page", () => {
  it("Navigate to contact us page and verify", () => {
    cy.visit("/");

    cy.contains("Contact us").click();

    cy.url().should("include", "/contact-us");
  });

  it("Test form in Contact us page", () => {
    cy.get('input[name="name"]')
      .type("Testing name")
      .should("have.value", "Testing name");

    cy.get('input[name="email"]')
      .type("testing@gmail.com")
      .should("have.value", "testing@gmail.com");

    cy.get('input[name="institution"]')
      .type("Test Inc.")
      .should("have.value", "Test Inc.");

    cy.get('textarea[name="message"]')
      .type("This is a test for the contact page")
      .should("have.value", "This is a test for the contact page");
  });
});

//testing all project pages
describe("Our projects pages", () => {
  it("Navigate to SODA for SPARC page", () => {
    cy.visit("/");

    cy.get("[id^=soda-page]").contains("SODA for SPARC").click({ force: true });

    cy.url().should("include", "/sodaforsparc");
  });

  it("Navigate to FAIRshare page", () => {
    cy.visit("/");

    cy.get("[id^=fairshare-page]").contains("FAIRshare").click({ force: true });

    cy.url().should("include", "/fairshare");
  });

  it("Nagivate to the KnowMore page", () => {
    cy.visit("/");

    cy.get("[id^=knowmore-page]").contains("KnowMore").click({ force: true });

    cy.url().should("include", "/knowmore");
  });

  it("Navigate to the SPARClink page", () => {
    cy.visit("/");

    cy.get("[id^=sparclink-page]").contains("SPARClink").click({ force: true });

    cy.url().should("include", "/sparclink");
  });
});
