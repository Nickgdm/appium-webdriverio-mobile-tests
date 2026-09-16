import dragPage from "../pageobjects/drag.page";

describe("Testes na tela DragDrop", () => {
    beforeEach(async () => {
        await dragPage.abrirMenuDrag();
        await driver.pause(1000);
    });

    it.only("Deve montar o quebra-cabeça completo", async () => {
        await dragPage.arrastarPeca1();
        await dragPage.arrastarPeca2();
        await dragPage.arrastarPeca3();
        await dragPage.arrastarPeca4();
        await dragPage.arrastarPeca5();
        await dragPage.arrastarPeca6();
        await dragPage.arrastarPeca7();
        await dragPage.arrastarPeca8();
        await dragPage.arrastarPeca9();
        await expect(dragPage.mensagemSucesso).toBeDisplayed();
    });
});