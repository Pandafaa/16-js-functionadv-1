console.log(window);
let name1 = 'Rabindranat';
const greeting = function () {
    let name1 = 'Peter';
    return function () {
        let name1 = 'John';
        console.log(`Hello ${name1}`);
    }
};
//greeting()();
const hello = greeting();
name1 = 'Tigran';
hello();