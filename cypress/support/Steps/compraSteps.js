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

//CT03
When("acesso o produto", () => {
    Compra.clicarprodutobolsa();
})

Then("valido se e possivel adicionar o produto no carrinho", () => {
    Compra.addprodutocarrinho();
    Compra.acessarcarrinho();
    Compra.validaritembolsanocarrinho();
})

//CT04
And("adiciono um produto no carrinho", () => {
    Compra.adicionarbolsanocarrinho();
    Compra.acessarcarrinho();
})

And("valido se o produto foi adicionado no carrinho", () => {
    Compra.validaritembolsanocarrinho();
})

When("volto na home do Site", () => {
    Compra.clicarbotaocontinueshoppping();
})

Then("valido se e possivel adicionar outro produto no carrinho", () => {
    Compra.adicionarcamisetablacknocarrinho();
    Compra.acessarcarrinho();
    Compra.validaritenscarrinho();
})

//CT05
When("adiciono um prduto no carrinho", () => {
    Compra.adicionarbolsanocarrinho();
    Compra.acessarcarrinho();
})

Then("valido se e possivel finalizar a compra", () => {
    Compra.clicarbotaocheckout();
    Compra.firstname();
    Compra.lastname();
    Compra.cep();
    Compra.botaocontinue();
    Compra.validartelacheckout();
    Compra.clicarbotaofinish();
})
