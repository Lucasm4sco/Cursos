# Classes e Objetos PHP


- **Classes:**

--> São definidas pela palavra <span style="color: Gold; text-decoration: underline; font-weight: 600; font-style: italic;">class</span> seguida do nome da classe que é seguido de um par de colchetes - { } - que englobam as definições de propriedades (variáveis presentes em uma classe) e métodos (funções) pertencentes à devida classe. exemplo:

```php
    class Simples {
        
        // decalaração de uma propriedade

        public $valor = 'qualquer valor';

        // declaração de um método

        public function mostrarValor(){
            echo $this->valor;
        }
    }
```

A palavra reservada <span style="color: Gold; text-decoration: underline; font-weight: 600; font-style: italic;">$this</span> faz referência a um objeto que está sendo chamado, nesse exemplo ele irá acessar a propriedade valor de determinado objeto que chamar o método; 
<br>

- **Instanciar um objeto:**

--> Para criar uma intância de uma classe é utilizado a palavra <span style="color: Gold; text-decoration: underline; font-weight: 600; font-style: italic;">new</span> seguido do nome da classe e parênteses, essa instanciação sempre irá retornar um objeto com as propriedades dadas à classe, excepto em casos que a classe tenha um constructor definido que dispare exceção em caso de erro. Sintaxe:


```php    
    $novoObjeto = new Nome_Da_Classe();
```

<br>

- **Herança em classes:**

--> Ao criar uma classe ela pode herdar propriedades e métodos de outra classe já existente, para isso ao declara-lá adicionamos a palavra reservada <span style="color: Gold; text-decoration: underline; font-weight: 600; font-style: italic;">extends</span> seguido da classe que desejamos herdar as propriedades, exemplo: 

```php
    class Simples1 {

        public $valor = 15;

        public function mostrarValor(){
            echo $this->valor;
        }
    }

    class Simples2 extends Simples1 {

        public $valor2 = 12;
    }

    $objeto = new Simples2();
    $objeto->mostrarValor();
    echo $objeto->valor2;
```

<br>

- **Construtores:**
<p>Permite passar valores à determinadas propriedades de um objeto instanciado pela classe, para isso utiliza-se o método contrutor <span style="color: Gold; font-weight: 600; font-style: italic;">__construct( parâmetros )</span>. Ao utilizar de classes filhas, deve se chamar o construtor da classe pai com <span style="color: Gold; font-weight: 600; font-style: italic;">parent::__construct()</span>, exemplo: 
</p>

```php
    class ClassePai {

        public int $xSucessor;
        public int $ySucessor;

        public function __construct(int $x, int $y) {
        
            $this->xSucessor = $x + 1 ;
            $this->ySucessor = $y + 1;
        }
    }

    class ClasseFilho extends ClassePai {
	
	    public int $x;
	    public int $y;

        public function __construct(int $x, int $y = 0){
		
		    $this->x = $x;
		    $this->y = $y;
		
            parent::__construct($x, $y);
        }
    }

    $objeto = new ClasseFilho(11, 12);

    print_r($objeto);
```


  - *explicação: no exemplo acima foi criada uma classe Pai que irá retornar os números sucessores referentes aos valores passados para seu construtor, já na classe Filho definimos algumas propriedades e repassamos esses valores para a classe Pai através do **parent::__contructor($valores);***


<br>

- **Destrutores:**

--> Síntaxe:

```php
    __descruct(): void
```

Esse método será chamado assim que todas as referências a algum objeto particular forem removidas ou quando o objeto for explicitamente destruído ou qualquer ordem na sequência de encerramento, exemplo: 

```php
    class Destrutor
    {
        function __construct() {
            print "Construindo \n";
        }

        function __destruct() {
            print "Destruindo " . __CLASS__ . "\n";
        }
    }

    $obj = new Destrutor();
    unset($obj);
```

Note que ao usarmos a função unset($objeto), o destructor da classe vai ser chamado, imprimindo uma frase na tela (Caso em uma classe Filha seja desejado chamar o destrutor da classe Pai pode-se usar **parent::__destruct()** para isso).

<br>

- **Visibilidades (Public, Protected e Private):**

--> Para definir a visibilidade de determinado propriedade ou método relacionado à uma classe, podemos usar as palavras: <span style="color: Gold; font-weight: 600;text-decoration: underline; font-style: italic;">public, protected ou private</span>, onde itens declarados como publicos podem ser acessados de qualquer lugar, enquanto itens declarados protegidos só podem ser acessados na própria classe ou classes herdeiras, e itens declarados como privados só podem ser acessados na própria classe em que foi definido.

Caso uma propriedade seja declarada var ou um método não seja declarado, eles seram definidos como públicos.

<br>

- **Operador de Resolução de Escopo (::):**

--> O Operador <span style="color: Gold; font-weight: 600; font-style: italic;">::</span> é um símbolo que permite acessar métodos ou propriedades estáticas, constantes, e sobrecarregadas de determinada classe. Sua síntaxe é:

```php
    echo Nome_Da_Classe::nome_Propriedade;
```

Exemplo de uso:

```php
    class MinhaClasse {
        
        const CONST_VALOR = 'valor fixo'; 
    }

    $objeto = new MinhaClasse();

    echo $objeto::CONST_VALOR."\n";
    echo MinhaClasse::CONST_VALOR;
```

<br>

- **Palavra-Chave 'static':**

--> <span style="color: Gold; font-weight: 600;text-decoration: underline; font-style: italic;">static</span> permite declarar propriedades ou métodos de uma classe como estáticos para que sejam acessíveis sem a necessidade de instanciar uma classe, por não existir um objeto para fazer referencia ao utilizar disso, não está disponível a palavra reservada <span style="color: Gold; font-weight: 600; font-style: italic;">$this</span> em métodos estáticos.

Propriedades estáticas não podem ser acessadas através do operador '->'. exemplo de uso:

```php
    class Estatica {
        
        public static $valor = 'valor estático';

        public static function retornaValor() {

            return self::$valor;
        }
    }

    echo Estatica::retornaValor();
```

<br>

- **Classe Abstrata:**


--> Uma classe abstrata é uma classe que define métodos que necessariamente devem ter na classe em que seja realizada a herança, para definir um método como abstrato devemos usar a palavra <span style="color: Gold; font-weight: 600; text-decoration: underline; font-style: italic;">abstract</span>, exemplo: 


```php
    abstract class ClasseAbstrata {
	
        // Força a classe que estende ClasseAbstrata a definir esse método
        abstract protected function pegarValor();
        abstract protected function valorComPrefixo( $prefixo );

        // Método comum
        public function imprimirValor(): void {
            echo $this->pegarValor();
        }
    }

    class ClasseConcreta extends ClasseAbstrata {
	
        protected function pegarValor() {
            return "18 \n";
        }

        public function valorComPrefixo( $prefixo ) {
            return "{$prefixo}18";
        }
    }

    $classe1 = new ClasseConcreta();

    $classe1->imprimirValor();
    echo $classe1->valorComPrefixo('R$') ."\n";
```

Uma classe abstrata é a base para outros objetos, onde afirmamos que todos os objetos derivados através de uma classe que estende uma classe abstrata deverão ter de alguns métodos semelhantes.

<br>

- **Interfaces:**

 --> Interfaces são implementadas em uma classe através da palavra reservada <span style="color: Gold; font-weight: 600; text-decoration: underline; font-style: italic;">implements</span>, e específica quais métodos uma classe deve implementar, sem definir como serão tratados, sintaxe para criar uma interface:

```php
    interface Nome_interface {
        // nome dos métodos
    }
```

É possível implementar mais de uma interface em uma classe separando as com uma vírgula, e caso não seja definido algum método da interface acabará resultando em um erro. exemplo de uso: 

```php
    interface PrimeiraInterface {

        public function setValor($number);
        public function getValor();
    }

    class Valor implements PrimeiraInterface {

        protected int $valor;

        function __construct($number){

            $this->valor = $number;
        }

        public function setValor($number){
            $this->valor = $number;
        }

        public function getValor(){
            return $this->valor;
        }
    }

    $obj = new Valor(12);

    echo $obj->getValor();
```

De certa forma interfaces funcionam como se fossem uma promessa, você está "prometendo" que aqueles métodos existiram na classe onde você a implementou, ou ocorerrá em erro.

<br>

- **Trait:**

--> São uma maneira de reutilizar determinado código em uma classe, para definimos um trait usamos a palavra reservada <span style="color: Gold; font-weight: 600; text-decoration: underline; font-style: italic;">trait</span> seguida do nome e chaves, e para utilizar de um trait, usamos a palavra <span style="color: Gold; font-weight: 600; font-style: italic;">use</span> seguido do nome do trait desejado dentro de uma classe, exemplo: 


```php
    trait Hello_World {
	
	    public function write(){
		    echo 'Hello World!';
	    }
    }

    class NovaClasse {
	    use Hello_World;
    }

    $obj = new NovaClasse();
    $obj->write();
```

Com Traits também é possível definir métodos estáticos, propriedades, utilizar das palavras public, private e protected, e também usar dentro de outros Traits.

Em casos que podem acontecer conflitos devidos a trait diferentes com nomes iguais, pode se usar o operador <span style="color: Gold; font-weight: 600; font-style: italic;">insteadof</span> para adicionar um pseudônimo a algum dos métodos.

<br>

- **Classes anônimas:**

--> São úteis para criar um objeto simples e descartável, síntaxe:


```php
    <?php

    $objeto = new class {
        
        public function Hello(){
            echo "Hello";
        }
    };

    $objeto->Hello();
```

Também é possível passar argumentos para seu construtor, utilizar de interfaces, classes pais, traits e entre outros métodos que uma classe utiliza.

