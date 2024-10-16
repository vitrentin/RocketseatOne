# Iniciando com React

## Aulas

### Fundamentos do ReactJS

Nessa aula nós vamos conhecer os principais fundamentos do
ReactJS <https://react.dev/>

Veremos alguns conceitos que vão desde os princípios do ReactJS e suas finalidades, até conceitos como SPA vs SSR e comparações com aplicações tradicionais sem utilização do React.

SSR x SPA (Single Page Application)

Rendering Patterns Web

### Bundlers & Compilers

Com o mundo de desenvolvimento evoluindo à todo momento, nem sempre todos os browsers conseguem acompanhar a evolução da tecnologia para dar suporte à sintaxe mais moderna.

Para isso existem os compilers, como o
babel <https://babeljs.io/>
que convertem o código moderno para uma sintaxe mais antiga que os browsers reconhecem, e os bundlers como o
webpack <https://webpack.js.org/>
que faz um bundling de todos os arquivos da nossa aplicação de uma forma que todos os browsers reconheçam.

Nessa aula vamos aprender a diferença entre compilers e bundlers, e também sobre as novas features que já existem nos navegadores mais modernos, que é a feature de ESModules.

Vamos também ter uma introdução ao
Vite <https://vite.dev/>
que irá substituir os bundlers e compilers tradicionais (como babel e webpack) e entender como ele tira proveito das funcionalidades mais modernas dos navegadores para ter uma melhor performance de compilação e execução.

Site <caniuse.com>

### Criando um projeto React

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/8da5cae>

Nessa aula vamos ver como iniciar um projeto ReactJS utilizando o Vite, através do guia
Getting Started <https://vite.dev/guide/>
.

Vamos, também, entender e limpar toda a estrutura da aplicação que é gerada por essa ferramenta para iniciar o desenvolvimento do nosso app.

Instalando o NodeJS
Nesta aula, iremos também orientá-lo sobre como instalar o Node.js, com foco na versão LTS (Long Term Support). A versão LTS é recomendada, pois recebe suporte de longo prazo.

Na data da gravação, a versão LTS era a 16.15.0, mas você pode sempre escolher a versão LTS disponível no momento em que estiver assistindo à aula.

Métodos de instalação do Node.js
Durante a aula, apresentaremos duas formas de instalar o Node.js:

Instalação pelo site oficial: Você pode seguir os passos de instalação no
site oficial do Node.js <https://nodejs.org/en>
. O site irá fornecer um instalador apropriado para o seu ambiente.

Utilizando um gerenciador de versões: Se você é um usuário mais avançado, pode optar por um gerenciador de versões para o Node.js, facilitando a troca e o uso de diferentes versões do Node.js conforme necessário.

Durante a aula, exploraremos o
n <https://github.com/tj/n>
, uma ferramenta disponível para sistemas Unix, como MacOS, Linux e Windows com a utilização do WSL.

Caso você utilize Windows sem o WSL, recomendamos utilizar alguma alternativa, ou instalar pela primeira opção através do instalador do site oficial. Um exemplo de ferramenta alternativa ao n é o uso do
nvm-windows <https://github.com/coreybutler/nvm-windows>

```sh
    npm create vite@latest
    npm i
    npm run dev
```

### Componentes

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/977fc84>

Agora que temos toda a estrutura do ReactJS pronta para desenvolver nosso app, vamos entender um dos conceitos mais importantes do ReactJS, que é a componentização.

JSX = JavaScript + XML (HTML)

Default Exports vs Named exports

### Propriedades

<https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/4f9f36d>

Outro conceito super importante do React são as propriedades.

Nessa aula, vamos entender o que são as propriedades e começar a utilizá-las nos nossos componentes.

### Questionário:

Questão 1:

Assinale a alternativa incorreta sobre React:

R: O React pode ser utilizado apenas interfaces Web, ou seja, não é possível utilizá-lo em outros ambientes como Mobile por exemplo.

Questão 2:

Assinale a alternativa incorreta sobre SPA e SSR:

R: No SSR temos Back-end e Front-end separados, podemos inclusive ter múltiplos Front-ends (Web, mobile, etc.). Já no SPA temos o Back-end e Front-end normalmente unidos em uma única aplicação.

Questão 3:

Sobre Bundlers e Compilers, assinale a alternativa correta:

R: O Babel é um exemplo de compiler para JS bem famoso e sua principal função é pegar sintaxes mais atuais do JS e converter para um código compatível com os Browsers.
