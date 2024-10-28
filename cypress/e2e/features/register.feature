Feature: Cadastro de usuarios
Cadastro de usuarios na plataforma

  Scenario Outline: "<caso_teste>"
    Given que estamos na page de Cadastro
    And inserimos nosso nome "<name>" e sobrenome "<surname>"
    And informarmos nossos dados de contato "<address>", "<email>" e "<phone>"
    And nosso generio como "<gender>" e hobbies "<hobbies>"
    And nossa skill "<skill>" e nosso pais "<country>"
    When eu selecionar meu nascimento "<year>", "<month>" e "<day>"
    And inserir minhas senhas "<pass>" e "<confirm_pass>"
    And clico no botao entrar
    Then Tenho meu cadastro realizado com sucesso

    Examples:
      | caso_teste           | name   | surname | address   | email           | phone       | gender | hobbies | skill | country | year | month | day | pass      | confirm_pass |
      | Cadastro com sucesso | Danilo | Barbosa | Rua teste | email@email.com | 11968786960 | Male   | Movies  | Java  | India   | 2001 | May   |   1 | passteste | passteste    |
