# Restaurante Siri Cascudo/Krusty Krab Restaurant

![Capturas de tela](https://github.com/CarolFerr/Projetos_Front-End/blob/main/Intermediario/projeto_krust_krab/Layout%20Restaurante%20Siri%20Cascudo.png)

## PT-BR
## 📝 Descrição
Este projeto consiste na criação de um site para o icônico restaurante Siri Cascudo do desenho animado Bob Esponja, utilizando o framework Vue.js para o frontend e um banco de dados JSON (db.json) para o backend, sendo o banner desenvolvido pela Inteligênica Artificial da Microsoft Copilot.

## ⚙️ Funcionalidades
- Criar um Hamburguer (sendo possível: selecionar o tipo de pão e carne e adicionar opcionais).
- Visualizar pedidos (ver status do pedido ou cancelar)
- Clicar no ícone ou Home para voltar a tela inicial.

## 💻 Tecnologias Utilizadas
- Vue js 3: Estrutura de todo o projeto.
- Microsoft Copilot: Banner do site.

## 🛠️ Ferrametas Utilizadas
- VS Code

## 🖊️ Habilidades presentes no código
### ✅ Desenvolvimento Frontend:
- Introdução ao framework Vue.js, incluindo sintaxe, componentes, diretivas e ferramentas de desenvolvimento.
- Interfaces web responsivas e interativas.
- Uso da biblioteca Vue Router essencial para a criação de Single Page Applications (SPAs) com o framework Vue.js, que oferece diversas funcionalidades que tornam a navegação entre as diferentes seções da aplicação fluida e intuitiva, sem a necessidade de recarregar toda a página, proporcionando uma experiência similar a um aplicativo desktop.

### ✅Desenvolvimento Backend:
- Manipulação de arquivos JSON para armazenar e recuperar informações do backend.

## 🕹️ Como Baixar e Executar o Projeto:
### Pré-Requisitos:
Para executar o projeto "Restaurante Siri Cascudo" em sua máquina, você precisará ter os seguintes softwares instalados:
- Node.js: A versão LTS mais recente (atualmente 18.20.4) é recomendada para garantir compatibilidade com o Vue.js 3. Você pode baixar o instalador do Node.js em seu site oficial: [Como Instalar o Node.js](https://nodejs.org/en/download/prebuilt-installer)
- Git: Um sistema de controle de versão para baixar o código do projeto. Você pode instalar o Git através do terminal ou baixando o instalador em seu site oficial: [Como Instalar o Git](https://git-scm.com/downloads)

### Passos para Instalação e Execução:
1. Clone o Repositório do GitHub

2. Acesse o Diretório do Projeto

3. Instale as Dependências:
Para instalar as dependências necessáarias para o projeto, execute o seguinte comando no diretório do projeto que foi aberta na sua IDE ou editor de texto.
```
npm install
```
Esse comando irá baixar e instalar todas as bibliotecas JavaScript e ferramentas necessárias para executar o projeto.

4. Execute o backend:
Para iniciar o backend da aplicação execute o comando:
```
npm run backend
```
Isso permitirá que o package.json seja executado e dê inicio ao servidor backend, que é responsável por processar requisições, gerenciar dados e realizar outras operações relacionadas à lógica de negócios, nesse caso o db.json.A URL padrão será `http://localhost:3000`, mas pode ser diferente dependendo da sua configuração.

5. Execute a página:
Para iniciar o servidor de desenvolvimento local e visualizar a página em seu navegador. Execute o seguinte comando:
```
npm run serve
```
Isso iniciará um servidor local e abrirá a página em seu navegador padrão. A URL padrão será `http://localhost:8080`, mas pode ser diferente dependendo da sua configuração.

### 📌 Observação
A cada vez que a aplicação for inicializada é necessario rodar primeiramente o comando `npm run backend` e posteriormente o comando `npm run serve`. Se a aplicação for inicializada apenas com o comando `npm run serve` a página mostrará um erro de `fetch` da aplicação. Isso ocorre devido a tentativa de recuperação de dados de um recurso remoto.

## 📜Licença
Este projeto está sob a licença MIT.

## 📚 Documentação/Documentation
- [*Vue.js Documentation*](https://vuejs.org/guide/introduction.html)

## EN-US
## 📝 Description
This project consists of creating a website for the iconic Krusty Krab from the SpongeBob cartoon, using the Vue.js framework for the frontend and a JSON database (db.json) for the backend, with the banner being developed by Microsoft's Artificial Intelligence Copilot.

## ⚙️ Functionalities
- Create a burger (you can: select the type of bread and meat and add options).
- View orders (see order status or cancel)
- Click on the icon or Home to return to the home screen.

## 💻 Technologies used
- Vue js 3: Structure of the entire project.
- Microsoft Copilot: Website banner.

## 🛠️ Tools Used
- VS Code

## 🖊️ Skills present in the code
### ✅ Front-end development:
- Introduction to the Vue.js framework, including syntax, components, directives and development tools.
- Responsive and interactive web interfaces.
- Use of the essential Vue Router library for creating Single Page Applications (SPAs) with the Vue.js framework, which offers various features that make navigation between the different sections of the application fluid and intuitive, without the need to reload the entire page, providing an experience similar to a desktop application.

### ✅Backend development:
- Handling JSON files to store and retrieve information from the backend.

## 🕹️How to Download and Run the Project:
### Prerequisites:
To run the “Krusty Krab Restaurant” project on your machine, you will need to have the following software installed:
- Node.js: The latest LTS version (currently 18.20.4) is recommended to ensure compatibility with Vue.js 3. You can download the Node.js installer from its official website: [How to Install Node.js](https://nodejs.org/en/download/prebuilt-installer)
- Git: A version control system for downloading project code. You can install Git via the terminal or by downloading the installer from its official website: [How to Install Git](https://git-scm.com/downloads)

### Steps for Installation and Execution:
1. Clone the GitHub Repository

2. Access the Project Directory

3. Install the dependencies:
To install the dependencies needed for the project, run the following command in the project directory that was opened in your IDE or text editor.
```
npm install
```
This command will download and install all the JavaScript libraries and tools needed to run the project.

4. Run the backend:
To start the application backend run the command:
```
npm run backend
```

This will allow package.json to be executed and start the backend server, which is responsible for processing requests, managing data and carrying out other operations related to business logic, in this case db.json.The default URL will be `http://localhost:3000`, but it can be different depending on your configuration.

5. Run the page:To start the local development server and view the page in your browser.Run the following command:
```
npm run serve
```
This will start a local server and open the page in your default browser.The default URL will be `http://localhost:8080`, but it may be different depending on your configuration.

### 📌 Note
Each time the application is initialized, you must first run the `npm run backend` command and then the `npm run serve` command. If the application is only initialized with the `npm run serve` command, the page will display an application `fetch` error.This is due to an attempt to retrieve data from a remote resource.

## 📜License
This project is under the MIT license.

