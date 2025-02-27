describe('Orange HRM Tests', () => {

  const selectorList = {
    linkSistem: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: ".oxd-alert"
  }

  it('Login - Fail', () => {
    cy.visit(selectorList.linkSistem)
    cy.get(selectorList.usernameField).type('teste')
    cy.get(selectorList.passwordField).type('teste234')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get(selectorList.wrongCredentialAlert)
  })

  it('Login - Sucess', () => {
    cy.visit(selectorList.linkSistem)
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })

})
