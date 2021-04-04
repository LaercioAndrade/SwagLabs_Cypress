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
}
export default CompraPage;