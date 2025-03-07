class MyInfoPage {

    selectorsList() {
        const selectors = {
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
            bloodTypeSelector: ".oxd-select-dropdown > :nth-child(6)",
            body: 'body'
        }

        return selectors
    }

    accessMyInfoPage() {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    }

    checkSave(){
        cy.get(this.selectorsList().body).should('contain', 'Successfully Updated')
    }

    nameFields(firstName, midlleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midlleNameField).clear().type(midlleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    licenseFields(id, otherId, numberLicence, expiryLicence){
        cy.get(this.selectorsList().genericFild).eq(3).clear().type(id)
        cy.get(this.selectorsList().genericFild).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericFild).eq(5).clear().type(numberLicence)
        cy.get(this.selectorsList().dateFild).eq(0).clear().type(expiryLicence)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    personalInfoFields(dateOfBirth){
        cy.get(this.selectorsList().selectorButton).eq(0).click()
        cy.get(this.selectorsList().nationalitySelector).click()
        cy.get(this.selectorsList().selectorButton).eq(1).click()
        cy.get(this.selectorsList().maritalStatusSelector).click()
        cy.get(this.selectorsList().dateFild).eq(1).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderButton).eq(0).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()
    }

    customFields(testeField){
        cy.get(this.selectorsList().selectorButton).eq(2).click()
        cy.get(this.selectorsList().bloodTypeSelector).click()
        cy.get(this.selectorsList().genericFild).eq(9).clear().type(testeField)
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }
}

export default MyInfoPage