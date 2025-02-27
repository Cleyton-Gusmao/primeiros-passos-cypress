describe('Orange HRM Tests', () => {
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('teste')
    cy.get("[name='password']").type('teste234')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert')
  })

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard')
  })
  
})
