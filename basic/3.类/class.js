var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.say = function () {
        console.log('恰饭了');
    };
    return User;
}());
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var son = new User('huang', 'weixing');
console.log(greeter(son));
console.log(son.say());
