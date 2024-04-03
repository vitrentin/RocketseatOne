# Propriedades Fundamentais

Todo grid é composto de 2 principais grupos:
`container: o pai` e `itens: o(s) filhos`

## Container (pai)

- display: grid;
- grid-template;
  - grid-template-colums;
  - grid-template-rows;
  - grid-template-areas;
- gap;
  - row-gap;
  - column-gap;

## Itens (filhos)

- grid-column;

  - grid-column-start;
    -grid-column-end;

- grid-row;
  - grid-row-start;
  - grid-row-end;

## Propriedades de alinhamento

Existem 9 propriedades fundamentais

**6 aplicadas em container**
`align-content`
`justify-content`
`place-content`

`align-itens`
`justify-itens`
`place-itens`

**3 aplicadas em itens**
`align-self`
`justify-self`
`place-self`

Então podemos separar em 3 grupos:
`align`, `justify`, `place`

E cada um deles irá observar ou o

- conteúdo do elemento `content`
- itens do elemento `itens`
- o próprio elemento `self`

Content
![Alt text](image.png)

align-content: space-around;
![Alt text](image-1.png)

justify-content: center;
![Alt text](image-2.png)

place é a junção do align e justify

align-itens: start;
![Alt text](image-3.png)

justify-itens: start;
![Alt text](image-4.png)

align-self: end;
![Alt text](image-5.png)

## Propriedades Auto

- grid-auto-flow
- grid-auto-rows
- grid-auto-columns

grid-auto-flow: column;
grid-auto-columns: 1fr;
![Alt text](image-6.png)

## Grid ou Flex

- Observe o layout e qual possui a menor complexidade
