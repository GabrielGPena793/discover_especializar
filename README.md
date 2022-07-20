# discover_especializar

### **O que é ReactJS?**

Uma biblioteca JavaScript que tem o objetivo de criação de interfaces.

### **Porque ReactJS é uma biblioteca e não um framework?**

Porque ele não tem uma opinião forte, ele não tem uma estrutura de pastas e regras que os frameworks em si tem. Ele te dá mais liberdade para criar as interfaces da maneira que preferir.

## **Criando Projeto**

Ao criar um projeto utilizando o ReactJS podemos utilizar os seguintes boilerplates:

- **[Create React App (CRA)](https://create-react-app.dev/)**
- **[Vite](https://vitejs.dev/)**

> Quais as vantagens de utilizar Vite ao invés do CRA?
> 

O Vite tem todos os recursos do CRA, mas com melhores implementações e recursos adicionais que o CRA não suporta, com isso o Vite acaba sendo até 10x mais rápido em comparação ao CRA.

Criando o primeiro projeto com o Vite

```
npm create vite@latest reactapp --template react
```

### **Executando projeto**

Existem duas maneiras de navegar até a pasta do seu projeto, pelo próprio **terminal**, utilizando o comando `cd` ou arrastando a pasta do projeto para dentro do **VS Code.**

Em seguida, será necessário baixar as dependências necessárias para a execução do projeto. Podemos utilizar o `npm` quanto o `yarn` como gerenciador de pacotes.

> Certifique-se que está na pasta do projeto e execute o comando desejado:
> 

```
yarn install
```

```
npm install
```

Após a instalação das dependências, execute o comando abaixo:

> Utilize o mesmo gerenciador do comando anterior
> 

```
npm run dev
```

```
yarn dev
```

Após executar o comando acima, abra o seu navegador e acesse o endereço:

`http://localhost:3000/`

E prontinho, seu projeto já estará em execução! 🚀

## JSX

É uma extensão do **JavaScript** bem semelhante ao ***HTML***. Basicamente ele é uma sintaxe que o ReactJS utiliza para que possamos criar as nossas interfaces de forma declarativa.

O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags `HTML.`

### **Estrutura pastas e arquivos**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50b0e874-c946-48c5-a878-74485c77a3c8/Untitled.png)

`📁 node_modules` - A pasta onde ficam todas dependências e módulos do nosso projeto.

`📁 src` - Pasta principal onde ficará todos os nossos arquivos.

`App.css` - Arquivo de estilização do **App.jsx** `App.jsx` - Página inicial do nosso projeto que será exibida no navegador.

`favicon.svg` - Ícone de favorito da página. `index.css` - Arquivo de estilização global `logo.svg` - Arquivo de imagem da logo do ReactJS. `main.jsx` - Arquivo responsável por inicializar nossa aplicação.

`index.html` - Arquivo HTML onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.

`.gitignore` - Esse arquivo descreve quais arquivos e pasta não devem subir para o Github. `package.json` - Arquivo responsável pelas dependências do nosso projeto. Contém informações do pacote, como: scripts, dependências, número de versão e etc...

`package-lock.json` - Parecido com o ***package.json,*** esse arquivo descreve as características das dependências do projeto como versão, integridade dos links e muito mais.

`vite.config.js` - Arquivo de configuração do Vite.

## Fragment

Um padrão comum no React é que um componente **não pode** retornar múltiplos elementos. Os Fragmentos (**Fragment**) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

```jsx
function Home() {
  return (
    <>
      <h1>Lista de Presença.</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
  );
}
```

## Componentes

Componente nada mais é do que um bloco de código reutilizável e independente.

## Propriedades

As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.

```jsx
import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
```

Renderização do componente Card:

```jsx
<Card name="Rodrigo" time="10:55:25" />
<Card name="João" time="11:00:10" />
<Card name="Ana" time="12:10:33" />
```

## Hooks

São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra `use` por convenção. Exemplos de hooks: `useState`, `useEffect`.

## useState

O Hook `useState` permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial) e uma função para mudar o valor atual do estado.

```jsx
import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {

	//estado
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  );
}
```

## useEffect

O `useEffect` é executado automaticamente sempre que o componente é renderizado.

- Se deixar o array de dependências vazio, o useEffect só irá se executado uma vez
- Se colocar alguma coisa dentro do array, ele vai ser ativado a primeira vez e sempre que oque ele for dependente sofrer uma alteração, ele irá ativar novamente;
- Não conseguimos deixar o **useEffec** async, mas podemos criar uma função async e chamar ela dentro do useEffect.

A estrutura do `useEffect` é da seguinte forma:

```jsx
useEffect(() => {
 // Dentro do objeto devemos colocar todas. ações que serão executadas.

// Os arrays definem quais os estados que o useEffect depende.
  }, []);
```

## Imutabilidade

O conteúdo da variável não deve ser modificado e sim substituído.

## KeyProp

Em uma listagem, normalmente utilizamos o `map()` do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade `key` para que esse dado nunca se repita e evitar que erros desse tipo aconteçam.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/254cc639-9a3e-4416-b230-e27fff625c3a/Untitled.png)

Para evitar esse tipo de erro, passamos a prop `Key,`
 veja o exemplo:

```jsx
{students.map((student) => (

  <Card key={student.time} name={student.name} time={student.time} />

 ))}
```
