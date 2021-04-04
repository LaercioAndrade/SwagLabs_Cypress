Feature: Realizar Compras no Site

@CT01
Scenario: Adicionar produto no carrinho na home da pagina
    Given que realizo login no Site
    When  clico para adicionar produto bolsa no carrinho
    Then  valido se o produto foi adicionado com sucesso no carrinho