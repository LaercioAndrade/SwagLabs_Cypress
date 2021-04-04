/*global Given, Then, And , When*/

import loginPage from '..//PageObjects/loginPage'
import compraPage from '..//PageObjects/compraPage'
const Login = new loginPage
const Compra = new compraPage

//CT01
Given("que realizo login no Site", () => {
    Login.abrirUrl();
    Login.preencherusername();
    Login.preenchersenha();
    Login.clicarbotaologin();
})

When("clico para adicionar produto bolsa no carrinho", () =>{
    Compra.adicionarbolsanocarrinho();
})

Then("valido se o produto foi adicionado com sucesso no carrinho", () => {
    Compra.acessarcarrinho();
    Compra.validaritembolsanocarrinho();
})

//CT02
When("clico para adicionar mais de um produto do estoque", () => {
    Compra.adicionarcamisetablacknocarrinho();
    Compra.adicionarbolsanocarrinho();
    
})

Then("valido se os produtos foram adicionados com sucesso no carrinho", () => {
    Compra.acessarcarrinho();
    Compra.validaritenscarrinho();
})
