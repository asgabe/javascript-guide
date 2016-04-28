# Note

## Chapter_1

> - JavaScript é uma linguagem de programação Web, fazendo parte da triáde de tecnologia que todos os desenvolvedores Web devem conhecer: HTML, para especificar o conteúdo da página Web; CSS, para especificara apresentação dessas páginas; e JavaScript, para especificar o comportamento delas.
> - JavaScript é uma linguagem de alto nível, interpretada e não tipada, conveniente para estilos de programação orientada a objetos e funcionais. A sintaxe de JavaScript é derivada da linguagem Java, funções de primeira classe de Scheme e da herança baseada em protótipos de Self.

- ###### 1.1 JavaScript básica
 > + Tipos muito importantes que programas em JavaScript podem manipular são objetos e arrays, objetos mais ainda.
 > + Frases em JavaScript são expressôes, então as sentenças completas são ***instruções***. As linhas que terminam com ponto e vírgula são instruções. Na verdade há muita sobreposição entre instruções e expressões. Em linhas gerais, uma expressão é algo que calcula o valor, mas não ***faz*** nada: ela não altera o estado do	programa de modo algum. As instruções, por outro lado, não têm um valor (ou não têm um valor com que nos preocupemos), mas alteram o estado.
 > + Uma ***função*** é um bloco de código JavaScript nomeado e paremetrizado que você define uma vez e, então, pode chamar repetidamente ***(prévia de funções)***.

 ```javascript
 
	// As funções são blocos de códigos JavaScript parametrizadas que podemos chamar.
	function plus(x) {			// Define uma função chamada "plus", com o parâmetro "x"
		return x + 1;			// Retorna um valor uma unidade maior do que o que foi passado
	}							// As funções são incluídas entre chaves

	plus(y)						// => 4: y é 3; portanto, essa chamada retorna 3 + 1

	var square = function(x) {	// As funções são valores e podem ser atribuidos a variáveis
		return x * x;			// Calcula o valor da função
	};							// => 16: chama duas funções em uma única expressão

	square(plus(y))
	
 ```
 > + Quando combinamos funções com objetos, obtemos ***métodos***.

 ```javascript

	/* Quando funções recebem as propriedades de um objeto, as chamamos de ***métodos***.
	*  Todos os objetos de JavaScript têm métodos
	*/
	var a = [];					// Cria um array vazio
	a.push(1, 2, 3);			// O método push() adiciona elementos em um array
	a.reverse();				// Outro método: inverte a ordem dos elementos

	/* Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao objeto na
	*  qual o método é definido: neste caso, o array de pontos anterior.
	*/
	points.dist = function() {				// Define um método para calcular a distância entre pontos
		var p1 = this[0];					// Primeiro elemento de um array que chamamos
		var p2 = this[1];					// Segundo elemento do objeto "this"
		var a = p2.x - p1.x;				// Diferença de coordenadas X
		var b = p2.y - p1.y;				// Diferença de coordenadas Y
		return Math.sqrt(a * a + b * b);	// Teorema de Pitágoras Math.sqrt() calcula a raiz quadrada
	};
	points.dist()							// => 1,414: distância entre nossos 2 pontos
 ```
 > + JavaScript é uma linguagem orientada a objetos, mas é bastante diferente da maioria. Exemplo de como definir uma classe JavaScript, os objetos que são instâncias dessa classe têm um único método chamado r() que calcula adição.

 ```javascript

	// Define uma função construtora para inicializar um novo objeto Point

	function Point(x, y) {		// Por convenção, as contrutoras começam com letra maiúsculas
		this.x = x;				// A palavra chave this é o novo objeto que está sendo inicializado
		this.y = y;				// Armazena os argumentos da função como propriedades do objeto
	}							// Nem um return é necessário

	// Usa uma função construtora com a palavra-chave "new" para criar instâncias
	
	var p = new Point(1, 1); 	// Atribuindo valores

	// Define métodos para objetos Point atribuido-os ao objeto prototype associado à função contrutora.

	Point.prototype.r = function() {
		// Esse é o objeto Point na qual o método ... é chamado
		return (this.x * this.x) + (this.y * this.y);
	}
 ```