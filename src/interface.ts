export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object1: ObjectType = {
  name: 'Da1isuke',
  age: 11,
};

let object2: ObjectInterface = {
  name: 'Daisuke',
  age: 11,
};
