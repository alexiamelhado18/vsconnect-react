# VSConnect


Este projeto tem como objetivo de criar um sistema web integrado, que atua como um intermediário entre clientes em busca de serviços e desenvolvedores disponíveis para prestá-los de forma rápida e eficiente.



### Funcionalidades

- Lista de todos os desenvolvedores 
- Lista de todos os serviços
- Filtro de Skill de Desenvolvedores
- Filtro de Skill de Serviços
- Cadastro de serviço
- Cadastro de desenvolvedor
- Cliente/Desenvolvedor realizar autenticação


## Preparação de ambiente

Para executar este projeto, é necessário ter duas ferramentas em sua máquina.


![Imagem](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png)

![Imagem](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png)

## Instalação

Para criar um projeto em [React](https://react.dev/learn) + [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) utilizando o [Vite](https://vitejs.dev/guide/), precisa executar os seguintes comandos:

> Cria o projeto:
```bash
  npm init vite@latest nomedoprojeto -- --template react-ts
```
> Entra na pasta do projeto:
```bash
  cd nomedoprojeto
```
> Baixa as dependências do projeto:
```bash
   npm install
```
> Inicia o projeto:
```bash
   npm run dev
```    


## Pacotes

O projeto necessita de pacotes importantes, como:

- [Router](https://www.npmjs.com/package/react-router-dom) 
- [React Secure Storage](https://www.npmjs.com/package/react-secure-storage)

### Instalação dos pacotes

> Entrar na pasta do projeto:
```bash
  cd nomedoprojeto
```
> Instalar o pacote Router:
```bash
  npm i react-router-dom
```
> Instalar o React Secure Storage:
```bash
  npm i react-secure-storage
```
## Organização de pastas e arquivos

A estrutura de pastas e arquivos foi organizada de forma clara e utilizada no mercado.

Árvore de arquivos: 
```
vsconnect/
  ├── node_modules/     (Pacotes/dependências do projeto)
  ├── public/           (Arquivos públicos)
  ├── src/              (Código-fonte) 
  │   ├── assets/       (Recursos estáticos)
  │   │   ├── images
  │   ├── components/   (Componentes reutilizáveis)
  │   │   ├── Header/
  │   │   ├── Footer/
  |   |   ├── CardDev/
  │   │   └── CardServico/
  |   ├── pages/        (Componentes que representa páginas)
  |   |   ├── CadastroServico/
  |   |   ├── CadastroUsuario/
  |   |   ├── Home/
  |   |   ├── ListaDevs/
  |   |   ├── ListaServicos/
  |   |   ├── Login/
  |   |   ├── PerfilUsuario/
  |   |   ├── VisualizarServico/
  |   ├── utils/         (Funções reutilizáveis)
  |   |   ├── api.ts/
  |   ├── index.css      (Estilização global)
  |   ├── main.tsx       (Renderiza os componentes na página HTML)
  │   └── vite-env.d.ts  (Define os tipos para variáveis de ambiente)
  ├── .eslintrc.cjs      (Configuração do ESLint)
  ├── .gitignore         (Arquivos/pastas a serem ignorados pelo Git)
  ├── index.html         (HTML principal)
  ├── package.json       (Informações do projeto e dependências)
  ├── package-lock.json  (Versões específicas das dependências)
  ├── README.md          (Documentação do projeto)
  ├── tsconfig.json      (Informações do projeto e dependências)
  ├── tsconfig.node.json (Versões específicas das dependências)
  └── vite.config.ts     (Configuração do Vite)
```

