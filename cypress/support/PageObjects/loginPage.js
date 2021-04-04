/// <reference types="cypress" />
import loginElements from '..//Elements/loginElements'
const Elements = new loginElements
const NavegadorURL = Cypress.config("baseUrl")


class TestPage{

    abrirUrl(){
        cy.visit(NavegadorURL)
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

    validarlogin(){
        cy.screenshot()
    }

    //CT02
    preencherusernamebloq(){
        cy.get(Elements.username()).type("locked_out_user")
    }

    mensagemuserbloq(){
        cy.get(Elements.msguserbloq()).contains("Epic sadface: Sorry, this user has been locked out.")
        cy.screenshot()
    }
}

export default TestPage;