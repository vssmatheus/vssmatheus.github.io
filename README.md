# 🌐 Web Curriculum

Projeto desenvolvido em React com Create React App
.

## 🚀 Scripts Disponíveis

No diretório do projeto, você pode executar:

 - npm start      # Executa em modo desenvolvimento (http://localhost:3000)
 - npm test       # Roda os testes
 - npm run build  # Gera a versão otimizada para produção

# 🔥 Fluxo Git – Padrão de Trabalho

Este documento define o fluxo de branches e comandos Git adotados neste projeto.
O objetivo é manter o código organizado, seguro e escalável, facilitando o trabalho em equipe.

## 🌳 Estrutura de Branches

- main → Produção (sempre estável).

- develop → Integração contínua (base para features).

- feature/ → Funcionalidades em desenvolvimento.

- release/ → Ajustes finais antes de produção.

- hotfix/ → Correções urgentes na produção.

## 🔧 Configuração inicial

- git clone git@github.com:usuario/repositorio.git
cd repositorio

- git checkout main
- git pull origin main
- git checkout -b develop
- git push origin develop

## ✨ Criando uma Feature

- git checkout develop
- git pull origin develop
- git checkout -b feature/nome-da-feature

- git add .
- git commit -m "feat: descrição clara"
- git push origin feature/nome-da-feature


## ➡️ Criar Pull Request (PR): feature → develop.

### 🔄 Merge de Features

PR é revisado.

Após aprovação → merge em develop.

- git checkout develop
- git pull origin develop

## 📦 Criando uma Release

- git checkout develop
- git pull origin develop
- git checkout -b release/vX.Y.Z


## ➡️ PR: release → main e release → develop.

### 🚀 Publicando em Produção

- git checkout main
- git pull origin main
- git merge --ff-only release/vX.Y.Z
- git push origin main

- git tag -a vX.Y.Z -m "Versão X.Y.Z"
- git push origin vX.Y.Z

### 🛠 Hotfix (correções urgentes)

- git checkout main
- git pull origin main
- git checkout -b hotfix/nome-do-fix

- git commit -m "fix: descrição do problema"
- git push origin hotfix/nome-do-fix


## ➡️ PR: hotfix → main e hotfix → develop.

### 🧹 Limpeza de Branches

- git branch -d feature/nome-da-feature
- git push origin --delete feature/nome-da-feature

## ✅ Resumo do Fluxo

- feature/ → novas funcionalidades → merge em develop.

- release/ → preparação de versão → merge em main + develop.

- otfix/ → correções urgentes → merge em main + develop.

- main → sempre estável.

- develop → base de integração.