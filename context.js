console.log(this === window);
const nameFunc =  () => {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
};

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson'
};

john.fullName = nameFunc;
peter.fullName = nameFunc;

console.log(john.fullName());
console.log(peter.fullName());

nameFunc();