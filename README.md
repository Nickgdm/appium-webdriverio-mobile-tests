<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                  AUTOMAÇÃO MOBILE COM APPIUM E WEBDRIVERI                               ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>
Projeto de estudo de automação de testes mobile para o Native Demo App, utilizando WebdriverIO e Appium.

## SOBRE O PROJETO

A atividade exercita a automação de um fluxo funcional em aplicativo Android, com foco na interação de arrastar e soltar (Drag and Drop).

## OBJETIVOS

- Praticar a estruturação de testes automatizados para dispositivos móveis.
- Configurar a comunicação entre WebdriverIO, Appium e o ambiente Android.
- Localizar elementos de origem e destino.
- Executar e validar uma interação de arrastar e soltar.

## TECNOLOGIAS E FERRAMENTAS

- JavaScript
- Node.js e npm
- WebdriverIO
- Appium
- Native Demo App

## PRÉ-REQUISITOS

- Node.js e npm instalados.
- Appium configurado e iniciado.
- Ambiente Android configurado, com emulador ou dispositivo compatível.
- Native Demo App disponível conforme as capabilities do projeto.

## INSTALAÇÃO E EXECUÇÃO

Instale as dependências:

```bash
npm install
```

Execute o cenário de Drag and Drop:

```bash
npm test -- --spec ./test/specs/drag.spec.js
```

Antes de executar, confira as capabilities e os caminhos definidos em `wdio.conf.js`, além dos scripts configurados em `package.json`.

## ESTRUTURA DO PROJETO

```text
atividade-appium-wdio/
├── test/
├── wdio.conf.js
├── jsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## DESAFIOS PRÁTICOS

- Configurar a comunicação entre WebdriverIO, Appium e o ambiente Android.
- Localizar os elementos de origem e destino da interação.
- Executar o gesto de arrastar e soltar.
- Validar o comportamento esperado no aplicativo.

## BOAS PRÁTICAS

- Centralizar a configuração de execução.
- Manter o cenário separado da configuração do runner.
- Validar explicitamente o comportamento esperado.
- Conferir as capabilities e os requisitos do dispositivo antes da execução.

## APRENDIZADOS

A atividade permite praticar a estruturação de testes mobile com WebdriverIO e Appium, incluindo a configuração do ambiente Android, a localização de elementos e a automação de gestos de interação como Drag and Drop.

## CONSIDERAÇÕES FINAIS

A execução depende da configuração local do Appium, do Android e das capabilities definidas no projeto. Ajuste esses parâmetros ao dispositivo ou emulador utilizado antes de executar os testes.
<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║       Atividade desenvolvida durante a formação profissionalizante em Quality Assurance (QA) pela       ║
║                     EBAC — Escola Britânica de Artes Criativas e Tecnologia                             ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>
