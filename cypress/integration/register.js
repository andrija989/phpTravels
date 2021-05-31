
import { navigation } from '../pageObjectModel/navigation.js'
import { registerPage } from '../pageObjectModel/registerPage.js'
import { bookingPage } from '../pageObjectModel/bookingPage.js'

const data = require('../fixtures/data.json')

describe('register spec', () => {
    
    it('visit travel page', () => {
        cy.visit('')
    })

    it('open my account bar', () => {
        navigation.clickMyAccountBtn()
    })

    it('go to register', () => {
        cy.intercept("GET", "https://www.phptravels.net/register", (req) => {}).as('goToRegister')
        navigation.clickSignUp()
        cy.wait('@goToRegister').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
    })

    it('register new user', () => {
        cy.intercept("POST", "https://www.phptravels.net/account/signup", (req) => {}).as('newUser')
        registerPage.registerNewUser()
        cy.wait('@newUser').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
        cy.url().should('include', '/account')
        navigation.signUpBtn.should('not.exist')
    })

    it('click home button', () => {
        navigation.clickHomeBtn()
    })

    it('book hotel', () => {
        cy.intercept('POST', `https://www.phptravels.net/hotels/detail/madinah/madinah-moevenpick-hotel/${data.hotel.checkin}/${data.hotel.checkout}/1/0`)
        bookingPage.selectHotel()
    })
})