describe('My First Test', function() {
    it(`Clicks an element`, function() {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url()
            .should('include','/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})

describe('Header Text', function() {
    it('Checks if header text exists', function() {
        cy.visit('index.html');
        cy.get('.logo-heading').contains('Fun Bus');
    })
})

// Arrange - setup initial app state
// - visit a web page
// - query for an element
// Act - take an action
// - interact with that element
// Assert - make an assertion
// - make an assertion about page content