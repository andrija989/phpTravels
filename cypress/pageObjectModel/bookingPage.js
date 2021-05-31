const data = require('../fixtures/data.json')

class BookingPage {
    get hotelSelectInput() {
        return cy.get('#s2id_autogen16 > .select2-choice > .select2-chosen')
    }

    get hotelInputfi() {
        return cy.get('div#select2-drop  .select2-input')
    }

    get checkInInput() {
        return cy.get('input[id="checkin"]')
    }

    get checkoutInput() {
        return cy.get('input[id="checkout"]')
    }

    get adoultGuestNumberMinus() {
        return cy.get('div#hotels > .menu-horizontal-content.tab-inner > .form-search-main-01 > form[role="search"] > div > .gap-10.mb-20.row.row-reverse > div:nth-of-type(3) > .col-inner > .row .col.o2 > .form-group.form-spin-group > .form-icon-left > .bootstrap-touchspin.bootstrap-touchspin-injected.input-group > .input-group-btn-vertical > .bootstrap-touchspin-down.btn.btn-white')
    }

    get submitBtn() {
        return cy.get('#hotels > .tab-inner > .form-search-main-01 > form > .form-inner > .gap-10 > .col-lg-2 > .btn')
    }

    selectHotel() {
        this.hotelSelectInput.click()
        this.hotelInputfi.type(`madinah`, {force:true})
        cy.wait(4000)
        this.hotelInputfi.type('{enter}', {force:true})
        this.checkInInput.click().clear().type(data.hotel.checkin)
        this.checkoutInput.click().clear().type(data.hotel.checkout)
        this.adoultGuestNumberMinus.click({force:true})
        this.submitBtn.click({force:true})
    }
}

export const bookingPage = new BookingPage()