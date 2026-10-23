# Automação Mobile com Appium e WebdriverIO

Projeto de automação de testes mobile para o Native Demo App, desenvolvido como atividade prática da formação em Quality Assurance (QA) na EBAC.

## Objetivo
Automatizar um fluxo funcional em aplicativo Android e validar o comportamento de **Drag and Drop**.

## Tecnologias
- JavaScript
- Node.js e npm
- WebdriverIO
- Appium
- Native Demo App

## Pré-requisitos
- Node.js e npm instalados.
- Appium configurado e iniciado.
- Ambiente Android configurado, com emulador ou dispositivo compatível.
- Aplicativo Native Demo App disponível conforme as capabilities do projeto.

## Instalação e execução
```bash
npm install
npm test -- --spec ./test/specs/drag.spec.js
```
Antes de executar, confira as capabilities e os caminhos definidos em `wdio.conf.js`, bem como os scripts de `package.json`.

## Estrutura do projeto
```text
atividade-appium-wdio/
├── test/
├── wdio.conf.js
├── jsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## Desafios práticos
Configurar a comunicação entre WebdriverIO, Appium e o ambiente Android, localizar os elementos de origem e destino e executar o gesto de arrastar e soltar.

## Boas práticas adotadas
- Configuração de execução centralizada.
- Cenário de teste separado da configuração do runner.
- Validação explícita do comportamento esperado.

## 📚 Aprendizados
A atividade permitiu praticar a estruturação de testes mobile com WebdriverIO e Appium, incluindo configuração do ambiente Android, localização de elementos e automação de gestos de interação como Drag and Drop.

## Considerações finais
A execução depende da configuração local do Appium, do Android e das capabilities definidas no projeto. Ajuste esses parâmetros ao seu dispositivo ou emulador antes de executar.

---

## 🎓 Formação
Atividade desenvolvida durante a formação profissionalizante em **Quality Assurance (QA) pela EBAC — Escola Britânica de Artes Criativas e Tecnologia**.