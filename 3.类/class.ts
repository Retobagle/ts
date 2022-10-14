class User {
  firstName: string
  lastName: string
  constructor (firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  say(): void {
    console.log('恰饭了');
    
  }
}
interface Person {
  firstName: string
  lastName: string
}
function greeter (person: Person) {
  return 'hello ' + person.firstName + ' ' + person.lastName
}
let son = new User('huang', 'weixing')
console.log(greeter(son));
console.log(son.say());
