# O que é uma API?

![Alt text](image.png)

API - Application Programming Interface, ou
Interface de Programação de Aplicação é um termo
para designar uma interface de comunicação que um
sistema oferece para que outros acessem suas funções.

![Alt text](image-1.png)

## O que é o Node.js

### Linguagem

Node.js não é uma linguagem de programação.

Javascript é a linguagem de programação.

### JS Runtime Enviroment

Ele é um ambiente que oferece recursos
que permite escrever e executar
aplicações Javascript.

### Para que serve Node.js?

Serve para fazer o que voce quiser,
desde sites à scripts de automação.
Incluindo, a criação de API.

### Onde o Node pode ser utilizado?

![Alt text](image-2.png)

### Vantagens

![Alt text](image-3.png)

### o que é o v8 Engine?

v8 é o interpretador JavaScript.
Desenvolvido pela Google e utilizado
em seu navegador Google Chrome.

O v8 foi desenvolvido em C++ com o objetivo
de aumentar a performance de execução do Javascript.

### O funcionamento do Node.js

![Alt text](image-4.png)

```js
npm install express --save
```

## Rota

### O Que é uma rota?

![Alt text](image-5.png)

### Métodos de requisições

![Alt text](image-6.png)

### Route Params

![Alt text](image-7.png)

### Query Params

![Alt text](image-8.png)

Query Params são opcionais pro caminho da rota,
já route é obrigatório

![Alt text](image-9.png)

![Alt text](image-10.png)

### Nodemon

```js
npm run dev
// npm install nodemon --save--dev
// para ficar apenas no desenvolvimento,
// ao atualizar reinicia o servidor, automaticamente
```

### Estrutura inicial do nosso projeto

![Alt text](image-11.png)

### HTTP Codes

![Alt text](image-12.png)

![Alt text](image-13.png)

### Middleware

![Alt text](image-14.png)

![Alt text](image-15.png)

![Alt text](image-16.png)

Middleware são funções que tem acesso ao objeto de
solicitação (requisição), o objeto de resposta (resposta), e a
próxima função de middleware no ciclo solicitação-resposta do
aplicativo.

A próxima função middleware é comumente denotada por uma
variável chamada next.

### Middleware podem

- Executar qualquer código.

- Fazer mudanças nos objetos de solicitação e resposta.

- Encerrar o ciclo de solicitação-resposta.

- Chamar o próximo middleware da pilha.

```js
npm install express-async-errors --save
```
