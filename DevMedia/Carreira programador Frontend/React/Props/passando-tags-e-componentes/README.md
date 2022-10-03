# Props react

Essa atividade foi feita para entender melhor sobre as props, nela é utilizado o atributo children, que permite passar tags HTML e componentes para outro componente renderizar, exemplo de sintaxe:

```html
    <Mensagem>
        <p>Tenha um bom dia!</p>
    </Mensagem>
```

Agora no componente usaremos props.children:

```js
    const Mensagem = (props) => (
        <section>
            <h1>Mensagem enviada:</h1>
            {props.children}
        </section>
        
    )
```

Ao renderizar o componente que utilizar de Mensagem, o HTML deverá ser:

```html
    <section>
        <h1>Mensagem enviada:</h1>
        <p>Tenha um bom dia!</p>
    </section>
```
