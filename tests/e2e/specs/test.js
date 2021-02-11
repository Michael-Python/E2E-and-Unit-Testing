// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '25')
  })

  it('should update the display and perform an operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('should update the display and perform multiple operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '50')
  })

  it('should return negative values', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-15')
  })

  it('should calculate for great values', () => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    // extending beyond the display results in the index notation - 1 e +8, in this instance. The first occurance is e22.
    cy.get('.display').should('contain', '10002000')
  })

  it('should calculate for decimals', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    // Not sure if this test is sufficient, it is the length of the allowed display
    cy.get('.display').should('contain', '0.14285714285714285')
  })

  it('should not allow for division by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    // Not sure if this test is sufficient, it is the length of the allowed display
    // I think infinity is great for explaining what the value is. Much more interesting than E, or undefined.
    cy.get('.display').should('contain', 'Infinity - bad')
  })

})



