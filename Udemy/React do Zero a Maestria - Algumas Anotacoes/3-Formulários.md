# Formulários com React

## Criando formulários

Ainda usaremos a tag ```form``` do html porém com algumas mudanças:

- As labels passam a conter o atributo ```htmlFor``` ao invés do atributo 'for', e deve receber o name do input que será relacionado;
- Não usaremos mais o atributo action, pois o processamento será feito de forma assíncrona;

## Label envolvendo o input

Uma outra forma de usar labels, não precisando mais do atributo htmlFor, pois o html será capaz de entender a estrutura:

```js
    <label>
        <span>E-mail: </span>
        <input type="email" name="email" placeholder="Digite o seu e-mail" />
    </label>
```

## Gerenciando dados de inputs

Para manipular valores dos inputs, comumente vamos usar do hook useState, e guardar o valor em uma variável, setando seu valor através do evento onChange do input, exemplo:

```js
    const [ name, setName ] = useState('');

    return (
        <label>
            <span>Nome: </span>
            <input 
                type="text" 
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)} />
        </label>
    )
```

## Envio de formulário

Para enviar um form usamos o evento onSubmit, ele chamará uma função onde devemos lembrar de parar o evento de envio padrão do html com o ```preventDefault``` para não haver mais o recarregamento da página:

```js
    export const MyForm = () => (
        <form onSubmit={(event) => { 
            event.preventDefault() 
        }}>
            ...
        </form>
    );
```

## Controlled inputs

Recurso que nos permite mais flexibilidade para forms de React, um uso muito comum é em formulários de edição em que os dados vem do back-end e será feito algumas alterações:

```js
    const [ email, setEmail ] = useState('lucas@example.com');

    return (
        <label>
            <span>Email: </span>
            <input 
                type="email" 
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
        </label>
    )
```

## Limpando formulários

Ao utilizar da maneira anterior para lidar com inputs, torna-se mais fácil também para limpar os inputs, bastando apenas setar uma string vazia para cada campo utilizado:

```js
    const [ name, setName ] = useSate('');
    const [ email. setEmail ] useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // validações
            ...
        // envio dos dados
            ...
        // limpeza do formulário:
        setName('');
        setEmail('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name" placeholder="Nome"
                value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">E-mail: </label>
            <input type="email" name="email" placeholder="E-mail"
                value={email} onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Enviar Dados</button>
        </form>
    );
```

## Input select

Funcionará de modo semelhante ao já visto, porém o valor que receberemos será o valor que passaremos através do atributo value nas options:

```js
    const [ role, setRole ] = useState('');

    return (
        <select onChange={(e) => setRole(e.target.value)}>
            <option value="" selected></option>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
        </select>
    );
```
