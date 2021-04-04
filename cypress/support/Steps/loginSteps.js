/*global Given, Then, And , When*/

import loginPage from '..//PageObjects/loginPage'
const Login = new loginPage

//CT01 Realizar Login com usuario valido
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

//CT02 Mensagem de usuario bloqueado
When("informo um usuario bloqueado", () => {
    Login.preencherusernamebloq();
    Login.preenchersenha();
    Login.clicarbotaologin();
})

Then("valido se aparece a Mensagem de usuario bloqueado", () => {
    Login.mensagemuserbloq();
}) 

//CT03 Usuario com problema
When("informo um usuario com problema", () => {
    Login.preencherusernameproblem();
    Login.preenchersenha();
    Login.clicarbotaologin();
})

Then("valido se o login e realizado com sucesso com as imagens dos produtos com erro", () => {
    Login.validarlogin();
}) 