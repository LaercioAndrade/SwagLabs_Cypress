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

    //CT03
    preencherusernameproblem(){
        cy.get(Elements.username()).type("problem_user")
    }

    //CT04
    preencerusernametempoespera(){
        cy.get(Elements.username()).type("performance_glitch_user")
    }

    validarLoginTempEsp(){
        cy.wait(1000)
        cy.screenshot()
    }

    //CT05
    senhaincorreta(){
        cy.get(Elements.password()).type("123")
    }

    msgloginincorreto(){
        cy.get(Elements.msgsenhainv()).contains("Epic sadface: Username and password do not match any user in this service")
    }

    //CT06
    usuarioinvalido(){
        cy.get(Elements.username()).type("teste")
    }



}

export default TestPage;