/// <reference types="cypress" />

import logoutElements from '../Elements/logoutElements'
const Elements = new logoutElements  
const NavegadorUrl = Cypress.config("baseUrl")


class TestPage{

abrirUrl(){
cy.visit(NavegadorUrl)
}

preencherusername(){
cy.get(Elements.username()).type("standard_user")
}

preenchersenha(){
cy.get(Elements.password()).type("secret_sauce")
}

clicarbotaologin(){
cy.get(Elements.buttonlogin()).click()
}

clicarmenu(){
cy.wait(1000)
cy.get(Elements.menu()).click()

}

clicarlogout(){
    cy.get(Elements.logout()).click()
}

validarlogout(){
    cy.screenshot()
}

}

export default TestPage;

