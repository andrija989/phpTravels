const faker = require('faker')
const data = require('../fixtures/data.json')

class RegisterPage {
    get firstNameInput() {
        return cy.get('input[name="firstname"]')
    }

    get lastNameInput() {
        return cy.get('input[name="lastname"]')
    }

    get mobileNumberInput() {
        return cy.get('input[name="phone"]')
    }

    get emailInput() {
        return cy.get('input[name="email"]')
    }

    get passwordInput() {
        return cy.get('input[name="password"]')
    }

    get confirmPasswordInput() {
        return cy.get('input[name="confirmpassword"]')
    }

    get submitBtn() {
        return cy.get('button[class="signupbtn btn_full btn btn-success btn-block btn-lg"]')
    }

    registerNewUser() {
        this.firstNameInput.type(data.user.firstName, { force:true })
        this.lastNameInput.type(data.user.lastName, { force:true })
        this.mobileNumberInput.type(data.user.mobileNumber, { force:true })
        this.emailInput.type(faker.internet.email(), { force:true })
        this.passwordInput.type(data.user.password, { force:true })
        this.confirmPasswordInput.type(data.user.password, { force:true })
        this.submitBtn.click({ force:true })
    }
}

export const registerPage = new RegisterPage()