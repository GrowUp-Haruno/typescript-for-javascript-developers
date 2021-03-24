import axios from 'axios';

export {};

type Mojiretsu = string;

const foo: string = 'hello';

const bar: Mojiretsu = 'world';

const example1 = {
  name: 'daisuke',
  age: 36,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'suzu',
  age: 23,
};

type Profile2 = typeof example1;

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios.get(url).then((res) => {
  type Profile = typeof res.data;
  const userData: Profile = res.data;
  console.log(userData);
});
