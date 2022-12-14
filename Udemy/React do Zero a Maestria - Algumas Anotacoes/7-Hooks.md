# Módulo Hooks

## useState

É um dos principais hooks do React, tem o propósito de gerenciar valores, onde podemos consultar um valor e altera-lo re-renderizando o componente (o que não acontece quando lidamos com manipulação de variáveis). Exemplo de síntaxe:

```js
const [ name, setName ] = useState(valor_inicial);
```

## useReducer

Funciona de modo semelhante ao useState, usado também para gerenciar valores, porém temos a possibilidade de executar uma função na hora da alteração do valor. Para isso o useReducer recebe um valor para gerenciar e uma função para alterar este valor:

```js
    // ...
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random();
    })

    return (
        <>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Click me</button>
        </>
    )
```

No exemplo criado acima, a variável number será alterada pelo método dispatch ao clicar no botão que carrega a função passada como argumento para o useReducer e retorna um estado para a variável. Esta função passada recebe como primeiro parâmetro o estado atual da variável e o segundo parâmetro é deixado para o argumento que será passado ao chamar o método dispatch, permitindo diferentes alterações na variavel criada. Segue um exemplo mais complexo utilizando as actions:

```js
    // ...
    const initialTasks = [
        {id: 1, text: 'Arrumar a cama'},
        {id:2, text: 'Fazer almoço'}
    ] 

    const taskReducer = (state, action) => {
        switch(action.type){
            case 'ADD':
                const objNewTask = {
                    id: state[state.length - 1].id + 1,
                    text: action.value
                }

                return [...state, objNewTask];

            case 'DELETE':
                return state.filter(task => task.id !== action.id)
            default:
                return state;
        }
    }

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTasks({type: 'ADD', value: newTask});
        setNewTask('');
    }

    return(
        <>
            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type='text' 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                />
                <button>Adicionar tarefa</button>
          </form>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text} 
                    <button onClick={() => dispatchTasks({
                        type: 'DELETE',
                        id: task.id
                    })}>
                        Excluir
                    </button> </li>
            ))}
        </>
    )
```

Nesse código acima podemos ver um melhor uso do useReducer, onde podemos adicionar e excluir as tarefas com base na ação enviada pelo seu método dispatch.

## useEffect

Também é um dos hooks mais utilizados, nos permite realizar desde alterações na DOM a até requisições HTTP. O motivo de sua utilização é que com ele conseguimos controlar quantas vezes algo pode acontecer, sua sintaxe é simples, recebendo uma função que será executada e um array de dependências. Quando não passamos as depêndencias indicamos que a função será executada apenas na primeira renderização do componente e quando há dependências indica que a função será executada também na primeira renderização do componente e depois apenas quando houver uma alteração em uma das dependências passadas para o hook.

Veja um código em que utilizamos do array de dependências:

```js
    // ...
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number)
    }, [number]);

    const changeNumber = () => {
        setNumber(Math.floor(Math.random() * 10))
    }

    return (
        <div className="App">
        <h1>Number: {number}</h1>
        <button onClick={changeNumber}>Mudar número</button>
        </div>
    );
```

Outro efeito que o useEffect nos permite realizar é a chamada técnica de cleanup (limpeza), onde faremos uma 'limpeza' para evitar error ou comportamentos indesejados de um componente e garantindo seu funcionamento, como exemplo de um comportamento indesejado, podemos citar um timeout que poderia continuar a ser executado mesmo ao mudar de página sem a técnica de limpeza, nesse caso seria criado o seguinte cleanup:

```js
    // ...
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        const timer =setTimeout(() => {
        console.log('Hello world!');

        setAnotherNumber(anotherNumber + 1);
        }, 2000)

        return () => clearTimeout(timer);
    }, [anotherNumber]);

    return (
        <div className="App">
        <h1>Number: {anotherNumber}</h1>
        </div>
    );
```

No código acima temos um loop através do useEffect onde somamos o valor atual da variável anotherNumber com + 1 a cada dois segundos, essa alteração faz com que useEffect seja executado novamente devido ao array de dependências e assim continua. Por causa desse comportamento podemos enfrentar erros ao mudar de página como: a função continua sua execução (algo que não iriamos querer, já que o usuário não estaria mais na página em que o valor seria usado) ou até mesmo erros de variáveis não definidas já que elas não estariam sendo usadas em outro componente. Então para evitar isso fazemos o cleanup retornando uma arrow function para o useEffect onde deverá possuir a limpeza necessária, nesse caso paramos a execução do timeout através do clearTimeout.

## useContext

É um hook utilizado para consumir um contexo, fazendo parte da Context API, nos permite utilizar um valor em múltiplas partes da aplicação. Quando utilizado se faz necessário a criação de um contexto e também de um Provider, em que precisaremos envolver entre os componentes que desejamos que compartilhem de mesmos valores, veja um exemplo da estrutura abaixo:

- criando contexto e provider:

```js
import { createContext } from 'react';

export const SomeContext = createContext();

export const HookUseContext = ({children}) => {
  const contextValue = 48;

  return (
    <SomeContext.Provider value={{contextValue}}>
      {children}
    </SomeContext.Provider>
  )
}
```

- Agora iremos para a raiz dos componentes/rotas e colocaremos o provider criado como elemento pai para os componentes que desejamos que acessem esse valor:

```js
    // ...
    return(
        <HookUseContext>
            /* Componentes e Rotas da aplicação */
        </HookUseContext>
    )
```

- E então finalmente acessamos/consumimos esse valor através do useContext em um dos seus Componentes filhos:

```js
    // ...
    const {contextValue} = useContext(SomeContext);
    return (
        <div>
            <h1>Número: {contextValue}</h1>
        </div>
    );
```

## useRef

Assim como o useState, o useRef pode ser utilizado para gerenciar valores, a diferença é que ele é um objeto e seu valor está na propriedade current. Outra particularidade do useRef é que ele não re-renderiza o componente ao ser alterado:

```js
    // ...
    const numberRef = useRef(0);

    useEffect(() => {
        numberRef.current += 1
    });

    return (
        <p>{numberRef.current}</p>
    )
```

- **Utilizando useRef com elementos DOM:**

O useRef pode ser utilizado também para selecionar elementos do JSX, isso nos permite fazer manipulação de DOM ou aplicar funções como a focus, que foca em um input:

```js
    // ...
    const inputRef = useRef();     
    const [text, setText] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        inputRef.current.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
            type='text' 
            ref={inputRef} 
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <input type='submit' value='enviar' />
        </form>
    )
```

*No código acima, o inputRef está sendo criado para fazer referência ao input, isso é possível pois ao utilizar o atibuto ref no input, estamos passando esse elemento para a propriedade current da variável inputRef, o que nos permite realizar a ação de focus nele após alguma mudança do formulário.*

## useCallback

O useCallback pode ser utilizado em duas situações, seu uso se tem por memorizar uma função, fazendo  ela não ser reconstruída a cada renderização de um componente. O primeiro caso é quando estamos prezando pela performance, então queremos que uma função muito complexa não seja reconstruída toda vez, já o segundo é quando o próprio React nos indica que uma função deveria estar contida em um useCallback, para evitar possíveis problemas na performance. Apesar da vantagem da performance, devemos cuidar do seu uso para não sofrer com algumas desvantagens como a garbage collection, maior utilização da memória e aumento na complexidade do código. Recebe um array de dependências que contém valores que vão ser modificados e utilizados na função.

## useMemo

Pode ser utilizado para garantir a referência de um objeto, fazendo com que algo possa ser atrelado a uma referência e não a um valor. Com isso conseguimos condicionar useEffects a uma variável de maneira mais inteligente. Funciona de maneira semelhante ao useCallback, sua principal diferença é que useMemo é utilizado para retornar valores memorizados e useCallback retorna uma função memorizada. Veja um código sem useMemo:

```js
  // ...
  const [number, setNumber] = useState(''); 
  const premiumNumber = ['0', '100', '200', /* ... */];

  useEffect(() => {
    console.log('number premium foi alterado')
  }, [premiumNumber])

  return (
    <div>
      <input 
        type='text' 
        value={number} 
        onChange={(e) => setNumber(e.target.value)}
      />
      {premiumNumber.includes(number) ? <p>Acertou o numero!</p> : ''}
    </div>
  )
```

No caso acima, toda vez que o componente re-renderizar devido a variavel de estado, a constante premiumNumber vai estar sendo recriada, executando novamente a função do useEffect, coisa que não iriamos querer, para isso usariamos o hook useMemo memorizando esse valor e evitando execuções desnecessárias, que ficaria da seguinte forma:

```js
    // ...
    const premiumNumber = useMemo(() => ['0', '100', '200', /* ... */], []);
    // ...
```

## useLayoutEffect

Muito parecido com o useEffect, a grande diferença é que este hook roda antes de renderizar o componente, ou seja, o hook é sincrono, bloqueando o carregamento da página até o sucesso de sua funcionalidade, a ideia é executar algo antes que o usuário veja a página

## useImperativeHandle

Com este hook temos como acionar ações em um outro componente de forma imperativa. Como não podemos passar refs como props, precisamos usar uma função ```fowardRef```. Isso nos permite passar as referências e torna o nosso exemplo viável:

- Componente pai:

```js
    // ...
    const componenteRef = useRef();
    return (
        <div>
        <ComponenteTeste ref={componenteRef} />
        <button 
            onClick={() => componenteRef.current.validate()}
        >
            Validate
        </button>
        </div>
    );
```

- Componente Filho:

```js
import React, { forwardRef, useRef, useImperativeHandle } from "react";

export const ComponenteTeste = forwardRef((props, ref) => {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if(localInputRef.current.value.length > 3)
          localInputRef.current.value = '';
      }
    }
  })

  return (
    <div>
      <p>Insira no máximo 3 caracteres: </p>
      <input type='text' ref={localInputRef} />
    </div>
  )
});
```

## Custom hooks

São os hooks que criamos, normalmente são criados com o objetivo de abstrair funções complexas do componente ou simplesmente reaproveitar o código. Segue um exemplo de custom hook para armazenar o valor anterior de uma variável de estado:

- Arquivo com o custom hook:

```js
import { useRef, useEffect } from 'react';

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  })

  return ref.current
}
```

- Componente que consumirá o custom hook:

```js
    // ...
    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

    return (
        <div>
        <p>Atual: {number}</p>
        <p>Anterior: {previousValue}</p>
        <button onClick={() => setNumber(Math.random())}>
            Atualizar
        </button>
        </div>
    );
```

## useDebugValue

hook utilizado para debug, aconselhado para ser utilizado em custom hooks, Ele adiciona uma área no React Dev Tools, esta área estará no componente em que o hook é utilizado. Se fossemos usa-lo no custom hook criado anteriormente, poderia ser usado da seguinte forma:

```js
import { useRef, useEffect, useDebugValue } from 'react';

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue('------ CUSTOM HOOK E USEDEBUGVALUE ---------');
  useDebugValue('O número anterior é: ' + value)

  useEffect(() => {
    ref.current = value;
  })

  return ref.current
}
```
