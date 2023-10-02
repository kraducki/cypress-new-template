const registerCypressGrep = require('cypress-grep')
registerCypressGrep()

describe('Sample test', {tags: ['@Regression']}, ()=>{
    beforeEach(()=>
    {
        //cy.clearCookies();
        //cy.clearLocalStorage();
        cy.visit('/',{
            onBeforeLoad: (win) => {
            win.sessionStorage.clear();
          }})
    })

    it('Go to Shop page', ()=>{

        // Just a dummy logic to show that environments may have variables
        if(Cypress.env('env') == 'prod') {
            console.log("PROD ENVIRONMENT");
        } else {
            console.log("TEST ENVIRONMENT");

        }

        // Another dummy test to make anything here
        cy.get('.wp-block-navigation-item__content').contains('Sklep').click();
        cy.get('.woocommerce-products-header__title').should('have.text', 'Sklep');
        
    })
})