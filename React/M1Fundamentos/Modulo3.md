# Os motores do React

## Aulas

### Iterando no JSX

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/f5b8eac>

Agora que temos toda a estrutura e estilização da nossa aplicação, nós precisamos dar vida e funcionalidade à ela.

Nessa aula vamos começar a aprender sobre como estruturar os dados do nosso elemento e iterar esses dados para exibir itens de maneira dinâmica na tela.

### Propriedades do Post

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/6ccb7ed>

Na última aula nós fizemos a iteração de um array de posts. Já nessa aula vamos aprender a como utilizar essa iteração para enviar os dados de cada post de nosso array para componente Post para que ele possa ser renderizado em tela dinâmicamente.

```sh
    npm i date-fns
```

### Estado (useState)

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/5849cff>

Nessa aula, vamos entrar em outro conceito super importante do React, que é o conceito de Estado.

Vamos iniciar a construção de um formulário de comentários para aprendermos sobre o funcionamento da renderização do React, imutabilidade e como podemos utilizar hooks para controlar o valor de variáveis em um estado do React.

### Inserindo comentários (Programação declarativa)

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/f77bf16>

Agora vamos adicionar ainda mais funcionalidade aos nossos comentários dos Posts.

Vamos também aprender como utilizar do conceito de
formulários e componentes controlados do ReactJS <https://pt-br.legacy.reactjs.org/docs/forms.html>
para podermos adicionar comentários com textos baseados no que digitamos no input de cada post.

#### Programação imperativa

O que deve ser feito (passo-a-passo).

##### Receita de bolo

1. Ligar o forno a 180º;
2. Abrir a porta do forno;
3. Cikicar a massa numa forma;
4. Colocar a forma com a massa dentro do forno;

#### Programação declarativa

Quais as condições para eu ter o resultado final.

##### Receita de bolo2

1. O forno precisa estar a 180º;
2. Quando o forno estiver quente, eu posso colocar a massa para assar;
3. Quando a massa estiver pronta, eu posso retira-la do forno.

### Entendendo a key

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/f2c8167>

Nessa aula vamos entender a propriedade key do React, que vem de um conceito importante do React, chamado
Listas e chaves <https://pt-br.legacy.reactjs.org/docs/lists-and-keys.html>

#### Key no React

##### Por que única?

3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente.

---

1, 2, 3, 4

---

1, 2, 3, 4, 5

##### Por que não posso usar o índice do array?

```js
const posts = [1, 2, 5, 4, 3];
// 1,2,5,4,3
```

### Comunicação entre componentes

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/94d2047>

Nessa aula vamos entender como podemos compartilhar variáveis e funções para outros componentes através de propriedades para permitir que um componente se comunique com o outro.

### Removendo comentários (imutabilidade)

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/e0a9809>

Nessa aula vamos aprender sobre como utilizar o conceito de Imutabilidade para remover um comentário de um Post.

### Validando formulário

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/aa9b51b>

Agora vamos aprender a como configurar validações dos inputs do nosso formulário, para específicar regras e mostrar mensagens de erro antes que o usuário faça o submit do formulário.

### Realizando likes nos comentários

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/4ff8253>

Nessa aula, vamos aprender como utilizar o hook de estado do React para fazer um contador de likes para cada comentário de um Post, e aprender também o funcionamento de algumas funcionalidades do React como a onClick.

### Entendendo closures no React

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/e30e968>

Agora que terminamos a funcionalidade de likes dos comentários, vamos entender o que aconteceu por debaixo dos panos nas renderizações do React para entender o fluxo de alteração do estado do React.

#### Closures no React

```js
function Comment(props) {
  const [likes, setLikes] = useState(0);
  const newLike = likes + 1;

  function addLike() {
    setLikes(likes + 1);
    setLikes(likes + 1);
    setLikes(newLike);
    setLikes(newLike); // desse modo ficaria 2
    setLikes((state) => {
      return state + 1;
    });
    setLikes((state) => {
      return state + 1;
    }); // desse modo também funciona
  }
}
// Apenas 1 setLikes
Comment(props, 0);
Comment(props, 1);

// Mais de 1 setLikes
Comment(props, 0);
Comment(props, 1);
Comment(props, 1);
// ...
// Com um dos métodos
Comment(props, 0);
Comment(props, 1);
Comment(props, 2);
```

### Quiz - Os motores do React

Questão 1:
Utilizar o método forEach é a forma mais recomendada para se iterar um array no JSX.

R: Falso

Questão 2:
Das seguintes alternativas, qual é a maneira correta de se usar o `map` para iterar um array e exibir o valor do item em tela? Considere o array sendo um array de strings, como [’item1’, ‘item2’, ‘item3’].

R:

```js
array.map(item ⇒ <p>{item}</p>)

```

Questão 3:
Qual a forma correta de se adicionar um valor que existe na variável novoItem ao final de um array em um estado chamado `items` no React?

R:

```js
    setItems(state ⇒ […state, novoItem])

```

Questão 4:
Sobre programação declarativa x programação imperativa, assinale a alternativa correta:

R: Programação declarativa é a forma em que, na maioria das vezes, vamos programar as aplicações React.
