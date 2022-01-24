let palavra = new RegExp(/at/)

console.log(palavra.test("Bola")); //false
console.log(palavra.test("Caminhão")); // false
console.log(palavra.test("Ataque")); //true