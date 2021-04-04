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

//CT04 Usuario com tempo de espera
When("informo um usuario com tempo de espera", () => {
    Login.preencerusernametempoespera();
    Login.preenchersenha();
    Login.clicarbotaologin();
})

Then("valido se o login e realizado com sucesso apos um tempo de espera", () => {
    Login.validarLoginTempEsp();
})

//CT05 Senha Invalida
When("informo a senha incorreta", () => {
    Login.preencherusername();
    Login.senhaincorreta();
    Login.clicarbotaologin();
})
    
Then("valido se aparece a mensagem de senha incorreta", () => {
    Login.msgloginincorreto();
})

//CT06 Usuario Invalid
When("informo um usuario Invalido", () => {
    Login.usuarioinvalido();
    Login.preenchersenha();
    Login.clicarbotaologin();
})

Then("valido se aparece a mensagem de usuario invalido", () => {
    Login.msgloginincorreto();
})