/// <reference types="cypress" />

import logoutElements from '../Elements/logoutElements'
const Logout = new logoutElements  
class TestPage{
clicarmenu(){
cy.wait(1000)
cy.get(Logout.menu()).click()

}

clicarlogout(){
    cy.get(Logout.logout()).click()
}

validarlogout(){
    cy.screenshot()
}

}

export default TestPage;

