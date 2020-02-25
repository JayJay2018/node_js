const fs = require('fs');
fs.writeFileSync('test.text', 'some text inside');

const object = {
    name: "Jay",
    city: "Hamburg",
    greet() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

console.log(object.greet())

const toArray = (...args) => {
    return args;
}
console.group('args start');
console.log(toArray(1, 'two', false, 9));
console.log(toArray(2, 3, false, 9, true));
console.log('Args end');
console.groupEnd();

const hobbies = ['Tennis', 'Golf', 'Programming', true, 19];
const cop = [hobbies];
const copied = [...hobbies];

console.group();
console.log(hobbies);
console.log(cop);
console.log(copied);
console.groupEnd();