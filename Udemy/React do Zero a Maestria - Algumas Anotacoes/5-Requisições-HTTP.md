# Módulo Requisições com HTTP

## JSON server

Pacote npm que é utilizado para simular uma API, permitindo requisições HTTP.

## useEffect

Hook do React que faz com que determinada ação seja executada apenas uma vez, se torna útil pois os componentes estão sempre se re-renderizando, e as vezes precisamos de ações únicas. O useEffect ainda possui um array de depêndencias, onde conterá os dados que ativem a execução da função de forma automática. É um hook presente em requisições assíncronas. exemplo:

```js
const [ products, setProducts ] = useState([]);

// resgatando dados
useEffect(() => {
    async function fetchData(){
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
    }
    fetchData();
}, []);
```

## Custom hook para o fetch

É normal dividir funções que poder ser reaproveitadas em hooks, custom hooks são funções normais javascript que iniciam com o padrão 'use' e podem chamar outros hooks. Por convenção podemos criar uma pasta hooks para organizar melhor. Vamos modificar o código criado anteriormente para um custom hook:

```js
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }
        fetchData();
    }, [url]);

    return { data };
};
```
