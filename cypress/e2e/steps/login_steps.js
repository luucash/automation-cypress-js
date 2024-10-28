/// <reference types ="cypress"/>
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^eu acesse a pagina home da aplicacao$/, () => {
	loginPage.acessHomePage()
});

When(/^eu inserir meu email "([^"]*)" e senha "([^"]*)"$/, (email, password) => {
	console.log(email, password);
	loginPage.accessLoginPage()
    loginPage.fillLoginInfo(email, password)
});

When(/^clicar no botao entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
	console.log(mensagem);
	cy.contains('Dashboard')
});
