function* myGen() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'd';
    yield 'e';
}

const generator = myGen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());