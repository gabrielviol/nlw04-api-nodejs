<h1 align="center">NPS-NLW</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-prints">Prints</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <img alt="Happy" src="https://github.com/rocketseat-education/nlw-04-nodejs/blob/d6ba81b93d7479045651554247b31db084cf9116/.github/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Ethereal-Email](https://ethereal.email/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/)

## 💻 Projeto

O NPS-NLW é uma aplicação que consiste em calcular o NPS da empresa. Nele fazemos o cadastro de usuários, cadastro de pesquisas, envio de e-mail para os usuários responderem as pesquisas de satisfação e com isso podemos realizar o cálculo do NPS.

Esse projeto foi desenvolvido durante a trilha de NodeJS, na quarta edição da NLW. Aprendemos conceitos sobre o que é um API, como iniciar um projeto utilizando Typescript e Express para gerenciamento das rotas, TypeORM para manipulação dos dados, testes automatizados e envio de e-mail.


## 🏃 Como executar

- Clone o repositório
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`
- Para rodar testes de requisições:
  - Criação de usuario `http://localhost:3333/users`
  - Criação de pesquisa `http://localhost:3333/surveys`
  - Envio de email `http://localhost:3333/sendMail`
- Para executar o teste unitario `yarn test`

## 📸 Prints

- Criação de usuario
<img alt="Happy" src=".github/createUser.png" width="80%">

- Criação de pesquisa
<img alt="Happy" src=".github/createSurvey.png" width="80%">

- Envio de email
<img alt="Happy" src=".github/sendEmail.png" width="80%">

- Email
<img alt="Happy" src=".github/email.png" width="80%">

- Calculo e resultado do NPS
<img alt="Happy" src=".github/calculateNps.png" width="80%">


A aplicação pode ser acessada em [`localhost:3333`](http://localhost:3333).
