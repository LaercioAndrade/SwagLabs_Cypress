/*global Given, Then, And , When*/

import logoutPage from '..//PageObjects/logoutPage'
const Logout = new logoutPage


Given("que esteja logado no site", () => {
    Logout.abrirUrl();
    Logout.preencherusername();
    Logout.preenchersenha();
    Logout.clicarbotaologin();
})

When("clico para realizar logout", () => {
    Logout.clicarmenu();
    Logout.clicarlogout();
})

Then("valido se o logout foi relizado com sucesso", () => {
    Logout.validarlogout();
})