
describe('Test 1 ', () => {
  it('An Add button should be present ', () => {
    cy.visit('https://newton-school-assignment-sb.netlify.app/')
    // check wether there is 
    // checking wether there is Name Add or not 
    cy.contains('Add')
    // check wether element with id "add" have its name as Add or not
    cy.get('[id="add"]').should('have.text','Add')
  })
})

// -----------------------------------------------------------------------------------------
describe('Test 2', () => {
  it('when button clicked the output should be zero ', () => {
    cy.visit('https://newton-school-assignment-sb.netlify.app/')
// click the button with id "add" 
    cy.get('#add').click()
    // check wether the field with id "text" have its value = 0 or not
    cy.get('#text').should('have.value','0')

  })
})
// -----------------------------------------------------------------------------------------
describe('Test 3', () => {
  it('checking the type of the fields ', () => {
    cy.visit('https://newton-school-assignment-sb.netlify.app/')
    // both of the down commented ways are correct but my choice is ummmmm... 1st one as its more clean 
    // cy.get('[type="text"]').should('have.id','inputt')
    // cy.get('[type="text"]').should('have.attr','id','inputt')

    // this gets the element with type "text" and check wether its id is inputt or not
    cy.get('[type="text"]').should('have.id','inputt')
    cy.get('[type="button"]').should('have.id','add')
    cy.get('[type="textField"]').should('have.id','text')


  })
})
// -----------------------------------------------------------------------------------------
describe('Test 4', () => {
  it('checking wether its adding correctly to its previous value or not', () => {
    cy.visit('https://newton-school-assignment-sb.netlify.app/')

    // here we check functionality of website program
    // we get id with "input" which is input field and type 34 in it
    // then we click our button
    // then we cross verify that wether the value in field with id "text" is 34 or not 
    cy.get('#inputt').type('34')
    cy.get('#add').click()
    cy.get('#text').should('have.value','34')

    // here we clear the input to type new value thenclick the button again 
    // then verify the value in text field to be 100 
    // bcozz 0+34=34, 34+66=100
    cy.get('#inputt').clear().type('66')
    cy.get('#add').click()
    cy.get('#text').should('have.value','100')

  })
})







