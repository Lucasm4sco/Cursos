# Módulo React Router

## React Router

Pacote npm utilizado para o gerenciamento de rotas, permitindo a criação de SPAs com múltiplas páginas, para instalar usamos o comando:

```npm
npm i react-router-dom
```

## Configurações

Para começar iremos importar 3 componentes da biblioteca react-router-dom, sendo eles:

- **BrowserRouter:** Componente de gerenciamento que usa a API de histórico do HTML5 para manter a interface sincronizada com a URL. É o componente pai que é usado para armazenar todos os outros componentes;
- **Routes:** Componente onde será definido as rotas;
- **Route:** Componente usado para criar uma rota, onde deve conter o caminho (path) para aquela rota e um componente para ser renderizado.

exemplo da síntaxe:

```js
const App = () => (
    <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
);
```

No exemplo acima foi criado um componente com rotas, em que quando acessamos a rota principal do site, será renderizado o componente Home, e quando acessarmos a rota 'url/about' será renderizado o componente About.

## Navegação entre páginas

Para fazer a linkagem de rotas será usado o componente Link do React Router, onde configura-se o parâmetro ``to`` recebendo a URL/path em que o usuário deverá ser redirecionado ao clicar nele. Vamos criar um exemplo seguindo o código já mostrado anteriormente:

```js
const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/about"> About </Link>
            </li>
        </ul>
    </nav>
);
```

Agora ao acrescentar essa navbar nas rotas, você pode perceber que ao clicar nos links haverá uma mudança tanto na url quanto no componente que renderiza-se na tela, porém a tela não será mais recarregada, trazendo uma experiência melhor para usuários do site.

## useParams

hook presente na biblioteca react-router-dom que retorna um objeto com os parâmetros da url, podendo ser utilizados para a criação de rotas dinâmicas, por exemplo, em uma rota onde tivessemos o caminho(path) ``/produtos/:id``, no componente da rota poderiamos pegar esse id da seguinte maneira:

```js
const { id } = useParams();
```

## Nested route

Traduzindo isso ficaria "rotas aninhadas", ou seja,  são telas que renderizam um componente pai e diversos componentes filhos a partir do caminho(path), indicando URLs mais complexas, como por exemplo: ``products/:id/something``. Nestes casos usaremos de nested routes, onde também podemos ter o acesso aos parâmetros da URL.

## Página 404

Para criarmos uma página 404, definiremos o path da rota como ``*`` e o seu componente, isso fará com que seja renderizado o componente determinado em qualquer página que não tenha sido criado uma url específica, ex:

```js
// ...
    <Route path="*" element={<PageNotFund />} />
// ...
```

## Links ativos

Para acesso fácil a uma modificação para os links ativos, podemos usar o componente NavLink ao invés do Link. Neste componente teremos acesso a um valor chamado isActive, que nos permite ativar uma classe para o link caso a rota  atual seja a mesma de seu atributo 'to'. Sintaxe:

```js
// ...
    <NavLink 
        to="/about"
        className={ ({ isActive }) => isActive ? 'link-active' : 'link-inactive' }
    > 
        About 
    </NavLink>
// ...
```

## Search Params

Muitos vezes podemos receber parâmetros pela url da seguinte maneira: ``url?product_id=1234&category=something``. Para lidarmos com esse tipo de parâmetros usaremos o hook useSearchParams que retorna um array de dois valores: os parâmetros de busca do local atual e uma função que pode ser usada para atualizá-los. Sintaxe:

```js
const [searchParams, setSearchParams] = useSearchParams();
```

## Redirect

Para fazer um redirecionamento de páginas podemos usar o componente Navigate da biblioteca, vamos supor que a nossa rota ``/about`` anteriormente era chamada por ``/detail``, então além de criamos um componente para essa rota não mais utilizada e criarmos uma lógica para redirecionar, podemos apenas usar o elemento Navigate e seu atributo 'to' que será suficiente para realizar esse redirecionamento, ex:

```js
    <Route path="/detail" element={<Navigate to="/about" />} />
```
