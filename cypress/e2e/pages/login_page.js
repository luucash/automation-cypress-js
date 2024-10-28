/// <reference types="cypress" />
import HomeElements from "../elements/home_elements"
import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements
const homeElements = new HomeElements
const url = Cypress.config('baseUrl')

class LoginPage {
    acessHomePage() {
        cy.visit(url)
        cy.wait(3000)
        cy.get(homeElements.btnHideCookie()).click()
    }

    accessLoginPage(){
        cy.contains(homeElements.selectAccount()).click()
        cy.contains(homeElements.btnLogin()).click()

    }

    fillLoginInfo(email, password){
        cy.get(loginElements.inputEmail()).type(email)
        cy.get(loginElements.inputPass()).type(password)

    }

    submitLogin(){
        cy.wait(3000)
        cy.get(loginElements.btnPageLogin()).click()

    }

} export default LoginPage