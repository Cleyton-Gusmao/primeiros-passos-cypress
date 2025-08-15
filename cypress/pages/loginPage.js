class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[placeholder='Username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
        cy.url().should('include', '/auth/login')
    }
    
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    
    checkLoginFail() {
        cy.location('pathname').should('equal', '/web/index.php/auth/login')
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}


export default LoginPage