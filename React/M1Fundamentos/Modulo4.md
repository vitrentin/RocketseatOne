# Aprimorando a aplicação

## Aulas

### Fundamentos do TypeScript

Nessa aula vamos começar a entender o que é
TypeScript <https://www.typescriptlang.org/>
, o motivo de a gente utilizá-lo e entender como a tipagem estática pode ajudar o nosso processo de desenvolvimento e até mesmo nossa produtividade.

### TypeScript no React

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/293f136>

Agora que já vimos o que é o TypeScript, vamos migrar o nosso projeto para utilizar TypeScript.

Vamos fazer isso criando um novo projeto Vite com a configuração react-ts, que já configura o TypeScript automaticamente pra gente.

Vamos também começar a migrar nossos componentes já criados para TypeScript.

### Extensão de interfaces

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/ee81731f0bea5d026652c3d3760a578f0408e790>

Agora que migramos nossos componentes para TypeScript, entraremos ainda mais fundo nas funcionalidades do TypeScript para entender como extender interfaces para que o TypeScript entenda ainda melhor o que os nossos componentes podem receber como propriedade.

### Quiz - Aprimorando aplicação

Questão 1:
Qual é uma das características de uma linguagem de tipagem dinâmica?

R: Ser possível trocar o valor de uma variável para um tipo diferente do valor anterior em tempo de execução.

Questão 2:
O que é TypeScript?

R: É uma linguagem de programação construída em cima do JavaScript, que traz tipagem e novas funcionalidades.

Questão 3:
O código abaixo é válido no TypeScript?

```tsx
interface CreateUser {
  name: string;
  age: number;
}

function createUser(user: CreateUser) {
  // ...
}

createUser("Diego Fernandes");
```

R: Não, não é válido.

Questão 4:
Para que serve o generic no TypeScript?

R: É uma forma de enviar tipos como parâmetros.
