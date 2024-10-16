# Estrutura da aplicação

## Aulas

### CSS Modules

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/1343595>

Nessa aula a gente vai conhecer a aplicação que vamos desenvolver durante esse módulo e começar com a estilização dela.

Para isso, vamos ver como utilizar os
CSS Modules <https://github.com/css-modules/css-modules>
, suas diferenças do CSS tradicional e como ele pode nos beneficiar durante o desenvolvimento dos nossos apps.

### CSS global

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/c75444b>

Agora que já começamos a estilizar a nossa aplicação, vamos criar também algumas estilizações globais para que todos os elementos da nossa página compartilhem de alguns estilos como tamanho e tipos de fontes, resets de CSS e também algumas cores padrões que vamos utilizar na nossa aplicação.

Você pode copiar a lista de cores a seguir:

```css
:root {
  --white: #fff;
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-500: #00875f;
}
```

### Componente: Header

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/7dba58d>

Nessa aula, vamos finalizar a estrutura e estilização do Header da nossa aplicação utilizando as configurações de cores e CSS que fizemos anteriormente.

### Componente: Sidebar

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/278206a>

Agora vamos começar a criar a estrutura do corpo da aplicação, que é onde exibiremos a Sidebar e o Feed de posts, e iniciar a construção e estilização do componente de Sidebar.

### Finalizando Sidebar

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/446000e>

Nessa aula continuaremos o desenvolvimento da Sidebar que começamos na aula anterior, e finalizaremos a estilização desse componente.

### Componente: Post

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/fd1526e>

Nessa aula vamos estruturar o conteúdo do componente Post, nos baseando no conteúdo que podemos encontrar no Layout do Figma.

### Estilização do Post

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/f1d562f>

Agora que já criamos a estrutura do componente de Post, chegou a hora de a gente criar também sua estilização.

### Formulário de comentários

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/1d06f10>

Agora vamos começar a criar a estrutura e estilização do formulário de comentários, aprendendo também de algumas propriedades novas como o :focus do CSS.

### Component: Comment

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/a67acf5>

Agora vamos começar a criar a estrutura do nosso componente de comentário, que exibirá cada comentário de um post do nosso feed.

### Estilizações do Comentário

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/aabb2c0>

Agora que terminamos a estrutura dos comentários, precisamos estilizá-los seguindo o Layout no Figma, e é justamente isso que faremos nessa aula.

### Componente: Avatar

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/5e7d183>

### Aplicando responsividade

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/68db7b2>

Antes de começarmos a adicionar funcionamento na nossa aplicação, vamos aprender como deixar a nossa página responsiva.

Nessa aula vamos explorar o conceito de responsavididade, aprender dicas e truques para fazer isso de forma mais fácil e adaptada para dispositivos mobile.

### Quiz - Estrutura da aplicação

Questão 1:
No React, qual o lugar ideal para se importar o css dos componentes?

R: Nos arquivos jsx.

Questão 2:
No css, qual uma das formas de resolver o problema de escopo?

R: Com módulos CSS.

Questão 3:
Qual das opções é a forma correta de nomeação de um componente?

R: Header (com a primeira letra maiúscula).

Questão 4:
Qual a forma correta de se nomear um arquivo css escopado?

R: \*.module.css

Questão 5:
Qual a forma que utilizamos para importar um arquivo de módulo css?

R: import styles from './styles.module.css';

Questão 6:
Nas tags HTML no React, como comumente utilizamos a escrita dos atributos?

R: Em camelCase (inicial minúscula e as composições com inicial maiúscula).
