class User {
    constructor(nickName) {
        this._nickName = nickName;
//        this.infoFunc = this.infoFunc.bind(this);
    }

    infoFunc = function (greeting = '', sign = '') {
        console.log(`${greeting} ${this._nickName}${sign}`);
    }

    infoArrow = () => {
        console.log(this._nickName);
    }
}

const peter = new User('Peter');
console.log('=========== Func ===========');
peter.infoFunc('Mr.');
console.log('=========== Arrow ===========');
peter.infoArrow();
console.log('=========== Lost 1 ===========');
const john = {_nickName: 'John'};
const info = peter.infoFunc.bind(peter);
info();
console.log('=========== Lost 2 ===========');
printInfo(peter.infoFunc.bind(john));
console.log('=========== Apply, Call ===========');
peter.infoFunc.call(john, 'Sir.', '!');
peter.infoFunc.apply(john, ['Sir.', '!']);


function printInfo(info) {
    info();
}