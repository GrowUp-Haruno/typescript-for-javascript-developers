export {};

class Person {
  constructor(public name: string, private age: number) {}
}

const me = new Person('daisuke', 23);
console.log(me);
