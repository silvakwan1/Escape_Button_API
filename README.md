# Escape Button API

## Descrição

Escape Button API é uma aplicação **full-stack** que evolui a partir deste repositório: [botao-yes-or-not](https://github.com/silvakwan1/botao-yes-or-not?tab=readme-ov-file). A API utiliza Node.js e MongoDB para armazenar e gerenciar dados de forma eficiente. Além disso, renderiza uma página simples com os dados recebidos. O front-end foi desenvolvido com HTML, CSS e JavaScript.

Um dos principais desafios foi o uso do MongoDB para salvar os dados e, posteriormente, trabalhar com os parâmetros passados na URL do front-end. A dificuldade estava em como pegá-los e enviá-los para o back-end através de uma GET usando o ID como parâmetro, buscando os dados e gerando a interface com as informações recebidas.

## Funcionalidades

- **Criar**: Permite que os usuários criem um novo botão de escape com um JSON que contém:

  ```json
  {
    "title": "me ver 10 pilas?",
    "text": "você poderia me arrumar 10 conto?",
    "lestUrl": "https://exemplo.com",
    "imgUrl": "https://exemplo.png"
  }
  ```

- **Buscar**: Possibilita a recuperação de dados de um botão de escape específico pelo ID.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para Node.js que facilita a construção de APIs.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados da aplicação.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js, que simplifica o trabalho com o banco de dados.

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SEU_USUARIO/Escape_Button_API.git

   ```

2. **Vá para a pasta::**

   ```bash
    cd Escape_Button_API

   ```

3. **Instale as dependências::**

   ```bash
   npm install

   ```

   ou

   ```bash
   yarn
   ```

4. **Adicione um arquivo .env no projeto com suas credenciais do MongoDB::**

   ```bash
   DB_PASS=seu_pass
   DB_USER=seu_user

   ```

5. **Rode a aplicação:**

   ```bash
   npm start

   ```

   ou

   ```bash
   yarn start
   ```
