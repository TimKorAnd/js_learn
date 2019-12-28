const userData = [
    {id: 2, name: 'second', job: 'binarier', age: 25},
    {id: 4, name: 'fourth', job: 'quarter', age: 45},
    {id: 8, name: 'eights', job: 'octeter', age: 85},

]

const index = {}

userData.forEach(obj => index[obj.id] = obj);
console.log(index);

console.log(index[4]);


/*function summ(n) {
    this.sum += n;
}
const adder = {
    sum: 0,
    add(numbers){
        numbers.forEach(summ.bind(this))
    }
}

adder.add([1, 2, 3]);
console.log(adder['sum'])*/

