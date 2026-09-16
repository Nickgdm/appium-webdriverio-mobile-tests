import loginPage from "../pageobjects/login.page";

describe('Funcionalidade: Login', () => {

    beforeEach( async () => {
        await loginPage.abrirMenu()
    });

    afterEach( async () => {
        await browser.relaunchActiveApp()
    });

    it('Deve fazer login com sucesso', async () => {
        await loginPage.preencherLogin('teste@teste.com', 'senha@123')
        expect (await loginPage.mensagemAlerta()).toEqual('You are logged in!')
    });

    it('Deve falhar ao fazer login com email inválido', async () => {
        await loginPage.preencherLogin('teste@teste', 'senha@123')
        await loginPage.mensagemErro('Please enter a valid email address')
    });

    it('Deve falhar ao fazer login com senha inválida', async () => {
        await loginPage.preencherLogin('teste@teste.com', '123')
        await loginPage.mensagemErro('Please enter at least 8 characters')
    });
});