/*global Given, Then, And , When*/

import loginPage from '..//PageObjects/loginPage'
const Login = new loginPage


Given("que acesso o site Swag Labs", () => {
    Login.abrirUrl();
})

When("informo os dados validos", ()  => {
    Login.preencherusername();
    Login.preenchersenha();
    Login.clicarbotaologin();
})

Then("realizo o login com sucesso", () => {
    Login.validarlogin();
})