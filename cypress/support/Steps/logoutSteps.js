/*global Given, Then, And , When*/

import logoutPage from '..//PageObjects/logoutPage'
import loginPage from '..//PageObjects/loginPage'
const Logout = new logoutPage
const Login = new loginPage

Given("que esteja logado no site", () => {
    Login.abrirUrl();
    Login.preencherusername();
    Login.preenchersenha();
    Login.clicarbotaologin();
})

When("clico para realizar logout", () => {
    Logout.clicarmenu();
    Logout.clicarlogout();
})

Then("valido se o logout foi relizado com sucesso", () => {
    Logout.validarlogout();
})