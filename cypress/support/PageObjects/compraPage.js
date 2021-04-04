import compraElements from '..//Elements/compraElements'
const Compra = new compraElements


class CompraPage{

//CT01    
adicionarbolsanocarrinho(){
    cy.get(Compra.addtocartbolsa()).click()
}

acessarcarrinho(){
    cy.get(Compra.acessarcarrinho()).click()
}

validaritembolsanocarrinho(){
    cy.get(Compra.validarprodutonocarrinho()).contains("Sauce Labs Backpack")
    cy.screenshot()
}

//CT02
adicionarcamisetablacknocarrinho(){
    cy.get(Compra.addtocartcamisetablack()).click()
}
validaritenscarrinho(){
    cy.get(Compra.validarprodutonocarrinho()).contains("Sauce Labs Backpack")
    cy.get(Compra.validarprodutonocarrinho()).contains("Sauce Labs Bolt T-Shirt")
    cy.screenshot()
}

//CT03
clicarprodutobolsa(){
    cy.get(Compra.clicarprodutobolsa()).click()
    cy.screenshot()
}

addprodutocarrinho(){
    cy.get(Compra.addprodutonabolsa()).click();
}

clicarbotaocontinueshoppping(){
    cy.get(Compra.btncontinueshopping()).click();
}

clicarbotaocheckout(){
    cy.get(Compra.btncheckout()).click();
}

firstname(){
    cy.get(Compra.firstname()).type("Laércio")
}

lastname(){
    cy.get(Compra.lastname()).type("Andrade")
}

cep(){
    cy.get(Compra.cep()).type("Avenida Paulista - São Paulo - Brasil")
}

botaocontinue(){
    cy.get(Compra.btncontinue()).click()
}

validartelacheckout(){
    cy.get(Compra.title()).contains("Checkout: Overview")
}

clicarbotaofinish(){
    cy.get(Compra.btnfinish()).click()
}

validarcompra(){
    cy.get(Compra.title()).contains("Checkout: Overview")
    cy.screenshot()
}
}
export default CompraPage;