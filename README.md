# ClassManager App

Um sistema front-end de gerenciamento de turmas e usuários, construído com React, TypeScript e React Router DOM. Consome a API classmanager-server 

## Tecnologias

- React
- TypeScript
- React Router DOM

## Pré-requisitos

- Node.js (>=16.x)

## Instalação

1. Clone este repositório
   ```powershell
   git clone https://github.com/matheuszuge/classmanager-app.git
   cd classmanager-app
   ```
2. Instale as dependências
   ```powershell
   npm install
   ```
3. Inicie o servidor de desenvolvimento
   ```powershell
   npm start
   ```
4. Acesse `http://localhost:3000` no seu navegador

## Scripts disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção em `build/`
- `npm test` - Executa os testes configurados
- `npm run eject` - Ejecta do Create React App (irreversível)

## Estrutura do projeto

```
.
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── LoginForm.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── ClassRoom.tsx
│   │   └── Users.tsx
│   ├── styles/
│   │   ├── main.css
│   │   └── login.css
│   ├── utils/
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Licença

MIT
