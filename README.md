# HydroBot

Portfólio da evolução do HydroBot: V1 (2024), V2 (2025) e V3 (2026).

Site publicado: https://hydrobot-six.vercel.app/

## Como executar no computador

Este projeto usa **Next.js e React**. Ele não é um HTML independente: abrir um arquivo com dois cliques não inicia o site. Para apenas visitar a versão publicada, use o link acima.

### 1. Instale o Node.js

Use o **Node.js 24.x**, que inclui o npm. Depois da instalação, abra um novo terminal e confira:

```bash
node --version
npm --version
```

### 2. Baixe e abra o projeto

1. Neste repositório, clique em **Code → Download ZIP**.
2. Extraia o ZIP.
3. Abra a pasta extraída no VS Code.
4. No VS Code, abra **Terminal → Novo Terminal**.

Execute os comandos na pasta que contém o arquivo `package.json`.

### 3. Instale as dependências

```bash
npm install
```

Faça isso na primeira execução e novamente quando as dependências do projeto forem alteradas.

### 4. Inicie o site

```bash
npm run dev
```

Abra **http://localhost:3000** no navegador. Se essa porta estiver ocupada, use o endereço indicado no terminal.

Mantenha o terminal aberto enquanto usa o site. As alterações no código aparecem durante o desenvolvimento. Para encerrar, pressione **Ctrl+C** no terminal.

### Executar a versão de produção localmente

Para compilar e executar a versão otimizada:

```bash
npm run build
npm start
```

Abra o endereço indicado no terminal. Após alterar o código, execute `npm run build` novamente antes de iniciar essa versão.

### Problemas comuns

- **“npm não é reconhecido”**: confirme que o Node.js está instalado e reabra o terminal ou o VS Code.
- **Erro dizendo que não encontrou `package.json`**: abra o terminal na pasta correta do projeto.
- **PowerShell bloqueando `npm.ps1` no Windows**: selecione o perfil **Command Prompt / Prompt de Comando** no terminal do VS Code e execute os mesmos comandos.

## Publicação

Na Vercel: framework Next.js, instalação `npm install`, build `npm run build`. Este repositório não está conectado automaticamente à publicação existente.
