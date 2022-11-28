# React com CSS

## CSS global

É usado para estilizar diversos elementos em comum ou fazer um reset no css, comumente usamos o arquivo index.css.

## CSS de Componente

Quando usamos um CSS para um componente específico, e importamos ele para o seu arquivo, um exemplo disso é o arquivo App.css ao iniciar um aplicativo React. Vale lembrar que esse CSS não será limitado apenas ao componente e poderá interferir em outros dependendo de como foi tratado.

## CSS inline

Quando passamos um objeto com valores de estilo para a propriedade style de uma tag HTML, exemplo:

```js
    <p style={{ 
        color: "blue", 
        padding: "20px", 
        borderTop: "2px solid black" 
    }}>
        Estilizando de maneira inline.
    </p>
```

## Classes dinâmicas

A maneira ideal quando queremos aplicar um estilo dinâmico para um componente, onde aplicamos o ternário (ou outros métodos) para indicar a classe que possui os estilos que desejamos:

```js
    <header className={ darkMode ? 'dark' : 'light' }> Este é um cabeçalho </header>
```

## CSS Modulos

É um recurso de CSS scoped, ou seja, ele vai ser exclusivo do componente criado, sem que o estilo interfira em outros componentes, importamos também ao componente, porém usaremos o nome do arquivo CSS com o padrão ```Componente.module.css```:

```css
    /* Title.module.css */
    .title {
        color: orange;
        background: purple;
        padding: 10px
    }
```

```js
    // Componente Title
    import React from 'react';
    import styles from './Title.module.css';

    const Title = () => (
        <h1 className={styles.title}> Este é o título da página! </h1>
    );

    export default Title;
```
