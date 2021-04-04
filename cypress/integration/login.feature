Feature: Acessar a tela de Login

@CT01
Scenario: Realizar Login com usuario valido
    Given que acesso o site Swag Labs
    When  informo os dados validos
    Then  realizo o login com sucesso

@CT02
Scenario: Mensagem de usuario bloqueado
    Given que acesso o site Swag Labs
    When  informo um usuario bloqueado
    Then  valido se aparece a Mensagem de usuario bloqueado 

@CT03
Scenario: Relizar Login com usuario com problema
    Given que acesso o site Swag Labs
    When  informo um usuario com problema
    Then  valido se o login e realizado com sucesso com as imagens dos produtos com erro
    
@CT04 
Scenario: Realizar login com tempo de espera
    Given que acesso o site Swag Labs
    When  informo um usuario com tempo de espera
    Then  valido se o login e realizado com sucesso apos um tempo de espera

@CT05
Scenario: Informar Senha invalida
    Given que acesso o site Swag Labs
    When  informo a senha incorreta
    Then  valido se aparece a mensagem de senha incorreta

@CT06
Scenario: Informar Usuario Invalido
    Given que acesso o site Swag Labs
    When  informo um usuario Invalido
    Then  valido se aparece a mensagem de usuario invalido