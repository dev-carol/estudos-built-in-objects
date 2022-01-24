## Object

- O pai de todos os objetos do javaScript;
- Possui propriedaes e métodos, mesmo o objeto estando vazio;
- Pode ser criado via new;

```jsx
let o = new Object();

console.log(o.toString()); //Representação do objeto em string
console.log(o.valueOf()); //Retorna o próprio objeto 
```

---

## Array

- O objeto pai de todos os arrays
- Pode instanciar um array com new;
- Possui também propeidades e métodos

```jsx
let a = new Array(1,2.3);
a[3] = 4;

a.toString();

console.log(Array instanceof Object); //true
```

### Array parte 2

 

- A propriedade length indica o número itens  de um array;
- E temos métodos famosos como: **push, pop e join;**
- É de extrema importância conhecer os métodos de arrays para programar bem em JS

```jsx
let a = [];

a.push('elemento');

console.log(a);

a.pop(); //remove o último elemento

console.log(a);
```

---

## Function

- O objeto para criar funções ;
- Podemos criar novas funções a partir de new;
- Obs: Não é utilizado, serve apenas para conhecimento e para você entender como JS funciona;

```jsx
let teste = new Function (
'a',
'return arguments'

);

console.log(teste('testando Function'));
```

### Function parte 2

- Podemos utilizar a propriedade length para saber o número de argumentos  de uma função
- Temos também o método toString neste objeto;

```jsx
function teste(a,b){
	return a + b;

}

console.log(teste.length);
```

### Function parte 3

- Os métodos que podemos utilizar do Function são Call e apply;
- O Call pode pegar métodos emprestado de objetos;
- O método Apply funciona igual o call, mas todos os parâmetros são transformados em arrays;
- 

```jsx
let a = {

 name: "A",
	falar(){
		console.log("Olá sou o método do" + this.name);
  }
}

b = {

name: "B",
};

a.falar.call(b);
```

---

## Boolean

- O Boolean também é um objeto e serve para valores booleanos (true e false)
- Podemos criar com New e o método valueOf() da o valor do booleano;
- Est objeto  não tem métodos;
- E é claro, você ponde dispensar a criação de um boolean com objeto, utilize o método convencional;

```jsx
let x = new Boolean(false);

console.log(x.valueOf());
```

---

## Number

- O number também é um objeto para tratar os números, tem métodos conhecidos como parseInt e parseFloat;
- Podemos criar um novo objeto com new também;

```jsx
console.log(Number.parseInt(12.7327)); //12
console.log(parseInt(12.7327)); //12
console.log(Number.parseFloat('12.73')); //12.73
```

### Number parte 2

- Algumas propriedades que são interessantes no Number são MAX_VALUE e MIN_VALUE, para saber o máximo e o mínimo que o JS atinge

```jsx
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
```

### Number parte 3

- Alguns outros métodos improtantes de Number : toFixed, toPrecision e toExponential
- E o detalhe é que não precisamos utilizar estes métodos com o Number, só o método já será interpretado pelo JS.

```jsx
console.log((123.3448365).toFixed(2)); // 12.366
console.log((123.15).toPrecision(2)); //12.20
console.log((1000).toExponential()); //
```

Para saber mais dos métodos Numbers: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)

---

## String

- Podemos criar uma string em objeto com o New;
- Temos acesso a propriedade length, que dá o número de caracteres;
- Podemos acessar um caractere pelo seu índice;

```jsx
let stringObj = new String('teste');
let string = 'teste';

console.log(stringObj.length);
console.log(string.length);

console.log(stringObj[1]);
console.log(string[1]);
```

### String parte 2

- O objeto String também dá muitos métodos interessantes;
- E como os arrays é de suma importância conhecer estes métodos;

```jsx
let string = 'teste';

console.log(string.toUpperCase());
console.log(("ASD").toLowerCase());
console.log(string.charAt(4)); //Mostra posição da letra 4 ( resultado = n)
console.log(string.indexOf('s')); //Onde está a letra S na string
```

Para saber mais métodos, acesse: [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods)

### String parte 3

- Conhecendo mais alguns métodos de string

```jsx
let string = 'teste';

console.log(string.slice(1,3)); // Exclui os caracteres do index inicial e final.Retornando o do meio
console.log(string.substring(1,3); //Retorna tudo, desde o index inicial até o final
console.log(string.split("")); //Explodir uma string em um array
```

---

## Math

- Um objeto com propriedades e metodos matemáticos;
- Podemos saber o valor de PI e até gerar números aleatórios;

```jsx
console.log(Math.PI);
console.log(Math.LN2);
console.log(Math.random());
```

### Math parte 2

- Temos também métodos de arredondamento como: floor, ceil e round;
- Métodos para calcular potência;
- E também raiz quadrada

```jsx
console.log(Math.floor(123.22));
console.log(Math.pow(12,2));
console.log(Math.sqrt(9));
```

---

## Date

- Objeto que lida com datas;
- Podemos criar uma nova data a partir  de agora;
- Ou a partir de uma data que precisarmos;

```jsx
console.log(new Date());
console.log(new Date(2002,4,30));
console.log(new Date (1347027200000));
```

### Date parte 2

- Temos diversos  para aplicar em datas;

```jsx
let date = new Date();

console.log(date.setMonth(5));

console.log(Date.parse('Apr 22, 2019'));

console.log(Date.now());

console.log(new Date(Date.now());
```

Referências : [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

## RegExp (Expressão regulares)

- Objeto para tratar expressões regulares;
- Podemos utilizar métodos como test e exec;

```jsx
let regex = new RegExp(/t/);

console.log(regex.test("teste"));
console.log(regex.test("opa"));

```

---

## Error

- Objeto para tratar de erros;
- Ele é o que deriva dos erros que recebemos.
- E também podemos criar os nossos erros;

```jsx
try{
	throw new Error('Deu errado!');
}catch(e){
	console.log(e.name + ": " + e.message);
}
```