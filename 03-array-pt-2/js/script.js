let a = [0,1,2];
let b = new Array (3,4,5)

console.log(a.length);
console.log(b.length);

a.push(4);
b.push(6);

//Array.prototype.push();


console.log(a);
console.log(b);


b.pop();

console.log(b);



let c = {};

//console.log(c.push(4)); 
//Dará erro, pq o push não está no Object e sim no Array