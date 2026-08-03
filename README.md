- Controle para Biblioteca em JS

Sobre o projeto

Este projeto consiste em um sistema simples de gerenciamento de biblioteca desenvolvido em JavaScript para execução no terminal utilizando Node.js. O sistema permite listar livros cadastrados, buscar um livro pelo título e cadastrar novos livros através de um menu interativo.

- Objetivo

Praticar os principais conceitos do Módulo 01:

- Variáveis (`let` e `const`)
- Tipos de dados
- Objetos
- Arrays
- Funções
- Estruturas condicionais (`if`, `else`)
- Estruturas de repetição (`do...while`)
- Importação e exportação de módulos (`import` e `export`)
- Entrada de dados com `prompt-sync`
- Manipulação de listas utilizando métodos como `push()`, `find()` e `forEach()`
- Organização do código em múltiplos arquivos
- Execução de programas utilizando Node.js

---

- Como executar

1. Clone este repositório.

2. Abra o projeto no Visual Studio Code.

3. Instale a dependência:

npm install prompt-sync

4. Execute o projeto com o comando:

node index.js

5. Escolha uma das opções do menu:

- Listar livros
- Buscar livro
- Lista livros disponíveis
- Cadastrar livro
- Realizar empréstimo
- Realizar devoluções
- Exibir estatísticas
- Sair do sistema

- Estrutura do projeto

biblioteca-js/
|
├── index.js
|
├── listarLivros.js
├── buscarLivro.js
├── listarDisponiveis.js
├── cadastrarLivro.js
├── realizarEmprestimo.js
├── realizarDevolucao.js
├── exibirEstatisticas.js
|
├── dadosLivros.js
|
├── Livro.js
|
├── README.md
└── package.json


Cada funcionalidade foi separada em um módulo para facilitar a organização, manutenção e reutilização do código.
