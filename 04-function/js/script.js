function teste(a){
    return a;
}

console.log(teste('opa'));


teste2 = new Function(
    'sa',
    'return arguments'
);

console.log(teste2("Testando")[0]);