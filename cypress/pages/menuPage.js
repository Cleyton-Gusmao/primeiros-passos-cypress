class MenuPage {

    selectorsList() {
        const selectors = {
            searchButton: ".oxd-main-menu-search",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']"
        }

        return selectors
    }

    accessSearchButton() {
        cy.get(this.selectorsList().searchButton).click()
    }

    accessAdminButton() {
        cy.get(this.selectorsList().adminButton).click()
        cy.location('pathname').should('equal', '/web/index.php/admin/viewSystemUsers')
    }

    accessPimButton() {
        cy.get(this.selectorsList().pimButton).click()
        cy.location('pathname').should('equal', '/web/index.php/pim/viewEmployeeList')
    }

    accessLeaveButton() {
        cy.get(this.selectorsList().leaveButton).click()
        cy.location('pathname').should('equal', '/web/index.php/leave/viewLeaveList')
    }

    accessTimeButton() {
        cy.get(this.selectorsList().timeButton).click()
        cy.location('pathname').should('equal', '/web/index.php/time/viewEmployeeTimesheet')
    }

    accessRecruitmentButton() {
        cy.get(this.selectorsList().recruitmentButton).click()
        cy.location('pathname').should('equal', '/web/index.php/recruitment/viewCandidates')
    }

    accessMyInfoPage() {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    }

    accessPerformanceButton() {
        cy.get(this.selectorsList().performanceButton).click()
        cy.location('pathname').should('equal', '/web/index.php/performance/searchEvaluatePerformanceReview')
    }

    accessDashboardButton() {
        cy.get(this.selectorsList().dashboardButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    }

    accessDirectoryButton() {
        cy.get(this.selectorsList().directoryButton).click()
        cy.location('pathname').should('equal', '/web/index.php/directory/viewDirectory')
    }

    accessMaintenanceButton() {
        cy.get(this.selectorsList().maintenanceButton).click()
        cy.location('pathname').should('equal', '/web/index.php/maintenance/purgeEmployee')
    }

    accessClaimButton() {
        cy.get(this.selectorsList().claimButton).click()
        cy.location('pathname').should('equal', '/web/index.php/claim/viewAssignClaim')
    }

    accessBuzzButton() {
        cy.get(this.selectorsList().buzzButton).click()
        cy.location('pathname').should('equal', '/web/index.php/buzz/viewBuzz')
    }



}

export default MenuPage