import formPage from "../pageobjects/forms.page";

describe('Funcionalidade: Tela de formulário', () => {
    
    beforeEach(() => {
        formPage.abrirMenuForm()
    });

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')
    });

    it('Validar a seleção do dropdown', async () => {
        await formPage.selecionarOpcao('This app is awesome')
        expect(await formPage.validarOpcao()).toEqual('This app is awesome')
    });

    it('Deve trocar o botão de on para off', async () => {
        //Troca pra on
        const botaoOnOff = await driver.$("accessibility id:switch")
        await botaoOnOff.click()
        //Troca pra oof
        await browser.swipe({
            direction: 'left',
            duration: 5000,
            percent: 0.1,
            scrollableElement: botaoOnOff,
        })
    });
});