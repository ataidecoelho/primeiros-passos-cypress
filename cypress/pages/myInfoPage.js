class MyInfoPage {
    selectorList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameFiel: '[name="middleName"]',
            lastNameField: '[name="lastName"]',            
            genericField: ".oxd-input",
            genericComboBox: ".oxd-select-text-input",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(4)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName,) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameFiel).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
        

    }
    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, expiryDate) {
        cy.get(this.selectorList().genericField).eq(5).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(6).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(7).clear().type(driverLicenseNumber)
        cy.get(this.selectorList().genericField).eq(8).clear().type(expiryDate)
        cy.get(this.selectorList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorList().secondItemComboBox).click()
        cy.get(this.selectorList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorList().thirdItemComboBox).click()
    }

}

export default MyInfoPage