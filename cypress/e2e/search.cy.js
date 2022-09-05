
describe('Search elements', () => {

    beforeEach(() =>{
        cy.visit('/');
    });
    
    it('search for element wih multiple results', () => {
        /* cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        }); */
        cy.search('dress');

        cy.fixture('searchResult').then((searchResult) => {  
            cy.get(searchResult.title).should('contain', "dress")
        })
    });

    it('Search for element with no results', () =>{
        /* cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        }); */

        cy.search('qwerty');

        cy.fixture('searchResult').then((searchResult) => {  
            cy.get(searchResult.alert).should('contain', 'No results were found for your search')
        }) 


    })
})