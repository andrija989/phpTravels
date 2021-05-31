class Navigation {
    get myAccountBtn() {
        return cy.get('a[id="dropdownCurrency"]')
    }

    get signUpBtn() {
        return cy.get('a[href="https://www.phptravels.net/register"]')
    }

    get homeBtn() {
        return cy.get('img[src="https://www.phptravels.net/uploads/global/logo.png"]')
    }

    clickMyAccountBtn() {
        this.myAccountBtn.eq(1).click({force:true})
    }

    clickSignUp() {
        this.signUpBtn.click({force:true})
    }

    clickHomeBtn() {
        this.homeBtn.click({force:true})
    }
}

export const navigation = new Navigation()