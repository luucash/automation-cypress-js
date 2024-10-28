/// <reference types ="cypress"/>
import RegisterPage from "../pages/register_page";
const registerPage = new RegisterPage

Given(/^que estamos na page de Cadastro$/, () => {
    registerPage.visitPage()
});

Given(/^inserimos nosso nome "([^"]*)" e sobrenome "([^"]*)"$/, (name,surname) => {
	registerPage.fillNameAndSurName(name,surname)
});

Given(/^informarmos nossos dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (address,email,phone) => {
	registerPage.fillContacts(address,email,phone)
	
});

Given(/^nosso generio como "([^"]*)" e hobbies "([^"]*)"$/, (gender,hobbies) => {
	registerPage.selectRadioGender(gender)
    registerPage.selectCheckHobbies(hobbies)
});

Given(/^nossa skill "([^"]*)" e nosso pais "([^"]*)"$/, (skill,country) => {
	registerPage.selectSkills(skill)
    registerPage.selectCountry(country)
});

When(/^eu selecionar meu nascimento "([^"]*)", "([^"]*)" e "([^"]*)"$/, (year,month,day) => {
	registerPage.selectBirthDay(year,month,day)
});

When(/^inserir minhas senhas "([^"]*)" e "([^"]*)"$/, (pass,confirmPass) => {
	registerPage.selectPasswords(pass,confirmPass)
	registerPage.selectImage()
});

When(/^clico no botao entrar$/, () => {
	registerPage.btnSubmit()
});

Then(/^Tenho meu cadastro realizado com sucesso$/, () => {
	
});
