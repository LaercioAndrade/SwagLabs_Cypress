Feature: Realizar Compras no Site

@CT01
Scenario: Adicionar produto no carrinho via home da pagina
    Given que realizo login no Site
    When  clico para adicionar produto bolsa no carrinho
    Then  valido se o produto foi adicionado com sucesso no carrinho

@CT02
Scenario: Adicionar mais de um produto no carrinho via home da pagina
    Given que realizo login no Site
    When  clico para adicionar mais de um produto do estoque
    Then  valido se os produtos foram adicionados com sucesso no carrinho

@CT03
Scenario: Acessar produto e adicionar no carrinho
    Given que realizo login no Site
    When  acesso o produto
    Then  valido se e possivel adicionar o produto no carrinho

@CT04
Scenario: Adicionar produto no carrinho e voltar no shooping e adicionar mais um produto no carrinho
    Given que realizo login no Site
    And   adiciono um produto no carrinho
    And   valido se o produto foi adicionado no carrinho
    When  volto na home do Site
    Then  valido se e possivel adicionar outro produto no carrinho