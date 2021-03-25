export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public midleName: string,
      public LastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('ダイスケ');
console.log(me.name);
const meOsaka = new Japanese.Tokyo.Person('ハルノ');
console.log(meOsaka.name);

const he = new English.Person('Michael', 'Joseph', 'Jackson');
const { firstName, midleName, LastName } = new English.Person(
  'Michael',
  'Joseph',
  'Jackson'
);

console.log(he.firstName, he.midleName, he.LastName);
console.log(firstName, midleName, LastName);
