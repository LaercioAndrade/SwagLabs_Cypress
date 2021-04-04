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