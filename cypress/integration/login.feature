Feature: Acessar a tela de Login

Scenario: Realizar Login com usuario valido
    Given que acesso o site Swag Labs
    When  informo os dados validos
    Then  realizo o login com sucesso

Scenario: Mensagem de usuario bloqueado
    Given que acesso o site Swag Labs
    When  informo um usuario bloqueado
    Then  valido se aparece a Mensagem de usuario bloqueado 