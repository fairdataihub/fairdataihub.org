//visits homepage
describe('Home page testing', () => {
  it('Visits fairdata', () => {
    cy.visit('/');

    cy.get('[id^=swiper-wrapper]').scrollIntoView();
    for (let i = 0; i < 5; i++) {
      cy.get('.swiper-button-next').click();
      cy.wait(150);
    }
    cy.get('.marquee').should('have.css', 'animation');
  });

  it('Checks footer links', () => {
    cy.visit('/');
    cy.wait(200);

    cy.get('#fairdata-footer').scrollIntoView();
    cy.wait(200);
  });
});

//testing on the team page
describe('Meet the Team page', () => {
  it('Navigate to the team page', () => {
    cy.visit('/');

    cy.contains('Meet The Team').click();

    cy.url().should('include', '/team');
  });
});

//testing the contact us page
describe('Contact Us Page', () => {
  it('Navigate to contact us page and verify', () => {
    cy.visit('/');

    cy.contains('Contact us').click();

    cy.url().should('include', '/contact-us');
  });

  it('Test form in Contact us page', () => {
    cy.get('input[name="name"]')
      .type('Testing name')
      .should('have.value', 'Testing name');

    cy.get('input[name="email"]')
      .type('testing@gmail.com')
      .should('have.value', 'testing@gmail.com');

    cy.get('input[name="institution"]')
      .type('Test Inc.')
      .should('have.value', 'Test Inc.');

    cy.get('textarea[name="message"]')
      .type('This is a test for the contact page')
      .should('have.value', 'This is a test for the contact page');
  });
});

// testing all project pages
describe('Our projects pages', () => {
  it('Navigate to SODA for SPARC page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#soda-page').click();

    cy.wait(150);

    cy.url().should('include', '/sodaforsparc');
  });

  it('Navigate to FAIRshare page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#fairshare-page').click();

    cy.wait(150);

    cy.url().should('include', '/fairshare');
  });

  it('Nagivate to the KnowMore page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#knowmore-page').click();

    cy.wait(150);

    cy.url().should('include', '/knowmore');
  });

  it('Navigate to the SPARClink page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#sparclink-page').click();

    cy.wait(150);

    cy.url().should('include', '/sparclink');
  });

  it('Navigate to the AQUA page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#aqua-page').click();

    cy.wait(150);

    cy.url().should('include', '/aqua');
  });
});

//testing on the team page
describe('Blog page', () => {
  it('Navigate to the blog page and check articles', () => {
    cy.visit('/');

    cy.contains('Blog').click();

    cy.url().should('include', '/blog');

    //gather all blogs and go through each page
    cy.get('article').then((elem) => {
      for (let i = 0; i < elem.length; i++) {
        let articleLink = elem[i].children[1].children[3];
        cy.log(articleLink);
        articleLink.click();
        cy.wait(2000);
        cy.visit('/blog');
      }
    });
    cy.log(cy.get('article'));
  });
});
