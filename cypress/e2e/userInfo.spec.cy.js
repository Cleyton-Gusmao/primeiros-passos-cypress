import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Ipdate', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkPage()
    myInfoPage.accessMyInfoPage()
    myInfoPage.nameFields(userData.userSuccess.firstName, userData.userSuccess.midlleName, userData.userSuccess.lastName)
    myInfoPage.licenseFields(userData.userInfos.employeeId, userData.userInfos.otherId, userData.userInfos.driverLicenseNumber, userData.userInfos.dateLicense)
    myInfoPage.personalInfoFields(userData.userInfos.dateOfBirth)
    myInfoPage.checkSave()
    myInfoPage.customFields(userData.userInfos.testeField)
    myInfoPage.checkSave()
  })
})