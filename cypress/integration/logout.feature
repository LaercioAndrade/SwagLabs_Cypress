Feature: Sair do site

Scenario: Realizar Logout do Site
    Given que esteja logado no site
    When  clico para realizar Logout
    Then  valido se o logout foi relizado com sucesso