class LoginPage {
  //Seletores
  get menuLogin() {
    return $("~Login");
  }
  get campoEmail() {
    return $("~input-email");
  }
  get campoSenha() {
    return $("~input-password");
  }
  get botaoLogin() {
    return $("~button-LOGIN");
  }
  get mensagem() {
    return $("id=android:id/message");
  }

  //Metodos / Ações
  async abrirMenu() {
    await this.menuLogin.click();
  }

  async preencherLogin(email, senha) {
    await this.campoEmail.clearValue()
    await this.campoEmail.setValue(email)
    await this.campoSenha.clearValue()
    await this.campoSenha.setValue(senha)
    await this.botaoLogin.click()
  }

  async mensagemAlerta() {
    return await this.mensagem.getText()
  }

  async mensagemErro(texto) {
    const elemento = $(`//android.widget.TextView[@text="${texto}"]`)
    await expect(elemento).toHaveText(texto)
  }
}

export default new LoginPage();