# Fundamentos do React

## O que são os hooks?

São recurso da biblioteca do React que possuem diversas funções, cada um deles começa com a inicial 'use'. Também podemos criar hooks personalizados que são chamados de custom hook.

## useState

É um dos hooks mais utilizados, serve pra criar dados que irão ser alterados e precisam ser renderizados seu novo valor na tela, sintaxe de exemplo:

```js
    const [ name, setName ] = useState('Letícia');
```

A variável que irá receber o valor passado para o hook vai ser a name, e será usado a função setName para atualizar esse valor

## Previous state

É uma forma de atualizar o valor de uma variável de estado através de uma modificação do valor atual, isso é feito passando uma função para o método setter criado, exemplo:

```js
    const deleteRandomUser = () => {
        const randomNumber = Math.floor(Math.random() * users.length);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => user.id !== randomNumber);
        });
    }
```

Quando isso acontece, o primeiro parâmetro que damos pra essa no método setter, carregará o valor atual da variavel (comumente usado com o prefixo 'prev' antes), e devemos retornar o valor que desejamos para a variavel, nesse caso foi um array sem o user que tiver o id igual ao numero gerado randomicamente.

## State lift

É a elevação de um componente filho para o componente pai, geralmente usamos quando temos um componente que usa o state e o outro que o altera, exemplo:

```js
    const [ message, setMessage ] = useState('');
    const handleMessage = (msg) => {
        setMessage(msg);
    } 

    return (
        <div>
            <MostrarMessagem message={message} />
            <AtualizarMessagem  handleMessage={handleMessage} />
        </div>
    )
```
