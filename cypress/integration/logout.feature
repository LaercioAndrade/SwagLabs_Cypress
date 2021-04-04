Feature: Sair do site

Scenario: Realizar Logout do Site
    Given que esteja logado no site
    When  clico para realizar logout
    Then  valido se o logout foi relizado com sucesso