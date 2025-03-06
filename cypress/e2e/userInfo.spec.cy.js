import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    midlleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericFild: ".oxd-input--active",
    dateFild: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    selectorButton: ".oxd-select-text--active",
    nationalitySelector: ":nth-child(27)",
    maritalStatusSelector: ".oxd-select-dropdown > :nth-child(4)",
    genderButton: ".oxd-radio-wrapper",
    saveButton: ".oxd-button--secondary",
    bloodTypeSelector: ".oxd-select-dropdown > :nth-child(6)"
  }

  it('User Info Ipdate', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)

    cy.get(selectorList.myInfoButton).click()
    cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorList.firstNameField).clear().type(userData.userSuccess.firstName)
    cy.get(selectorList.midlleNameField).clear().type(userData.userSuccess.midlleName)
    cy.get(selectorList.lastNameField).clear().type(userData.userSuccess.lastName)
    cy.get(selectorList.genericFild).eq(3).clear().type("ACC1051")
    cy.get(selectorList.genericFild).eq(4).clear().type("Other Id")
    cy.get(selectorList.genericFild).eq(5).clear().type("Driver's License Number")
    cy.get(selectorList.dateFild).eq(0).clear().type("2026-04-04")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.selectorButton).eq(0).click()
    cy.get(selectorList.nationalitySelector).click()
    cy.get(selectorList.selectorButton).eq(1).click()
    cy.get(selectorList.maritalStatusSelector).click()
    cy.get(selectorList.dateFild).eq(1).clear().type("2000-04-04")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genderButton).eq(0).click()
    cy.get(selectorList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorList.selectorButton).eq(2).click()
    cy.get(selectorList.bloodTypeSelector).click()
    cy.get(selectorList.genericFild).eq(9).clear().type("Test_Field")
    cy.get(selectorList.saveButton).eq(1).click()
  })

})
