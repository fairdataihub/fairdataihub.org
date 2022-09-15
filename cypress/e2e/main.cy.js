//visits homepage
describe('Home page testing', () => {
  it('Visits fairdata', () => {
    cy.visit('/');
  });

  it('Checks for swiper wrapper and marquee', () => {
    cy.get('[id^=swiper-wrapper]').scrollIntoView();
    for (let i = 0; i < 5; i++) {
      cy.get('.swiper-button-next').click();
      cy.wait(200);
    }
    cy.get('.marquee').should('have.css', 'animation');
  });

  it('Checks footer links', () => {
    cy.visit('/');
    cy.wait(200);

    cy.get('#fairdata-footer').scrollIntoView();
    //check links within the footer page

    cy.get('#footer-links-container')
      .children()
      .then((elem) => {
        // three footer containers holding links
        for (const item of elem) {
          //footer element containers
          cy.get(item.children[1]).then((element) => {
            element.children().each((_index, link) => {
              //a tag is found here
              cy.log(link.children[0]);
              cy.get(link.children[0])
                .invoke('attr', 'href')
                .then((href) => {
                  cy.log(href);
                  cy.visit(href);
                  cy.wait(200);
                });
            });
          });
        }
      });
  });
});

//testing on the team page
/**
 * Possible check:
 * check if images have loaded
 */
describe('Meet the Team page', () => {
  it('Navigate to the team page', () => {
    cy.visit('/');

    cy.contains('Meet The Team').click();

    cy.url().should('include', '/team');
    //check images have loaded
  });
});

//testing the contact us page
//Possible check: make sure background animation is happening
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
/*
Possible checks:
Test team icons on webpage, check if any animations are playing
*/
describe('Our projects pages', () => {
  it('Navigate to SODA for SPARC page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#soda-page').click();

    cy.wait(200);

    cy.url().should('include', '/sodaforsparc');
  });

  it('Navigate to FAIRshare page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#fairshare-page').click();

    cy.wait(200);

    cy.url().should('include', '/fairshare');
  });

  it('Nagivate to the KnowMore page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#knowmore-page').click();

    cy.wait(200);

    cy.url().should('include', '/knowmore');
  });

  it('Navigate to the SPARClink page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#sparclink-page').click();

    cy.wait(200);

    cy.url().should('include', '/sparclink');
  });

  it('Navigate to the AQUA page', () => {
    cy.visit('/');

    cy.get('#project-container').invoke('show');
    cy.get('#aqua-page').click();

    cy.wait(200);

    cy.url().should('include', '/aqua');
  });
});

//testing on the team page
describe('Blog page', () => {
  it('Navigate through each article', () => {
    cy.visit('/');

    cy.contains('Blog').click();

    cy.url().should('include', '/blog');

    //gather all blogs and go through each page
    cy.get('article').then((elem) => {
      cy.log(elem);

      for (const item of elem) {
        cy.wait(200);
        cy.get(item.children[1].children[3])
          .invoke('attr', 'href')
          .then((href) => {
            cy.log(href);
            cy.visit(href);
            // what do after visiting
            /*
            possible checks:
            Check blog content, check file source with nofs/fs
            */
            cy.wait(300);
          });
        //reset and return to blog page
        cy.visit('/blog');
        cy.wait(300);
      }
    });
  });
});
