class DashboardPage {

    selectorList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selectors
    }

    checkPage(){
        cy.get(this.selectorList().dashboardGrid)
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    }

}

export default DashboardPage