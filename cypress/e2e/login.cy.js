describe('login', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    });


    it('login with incorrect email', ()=>{
        cy.login('jennifer', 'abc123..')
        cy.fixture('login').then((login) =>{
            cy.get(login.incorrectLoginBanner).should('contain', 'Invalid email address');
        }) 
       
    })
})