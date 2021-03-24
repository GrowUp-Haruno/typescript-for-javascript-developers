export {};

const sum: (...values: number[]) => number = (...values: number[]): number =>
  values.reduce((acu, cur) => acu + cur, 0);

console.log(sum(1, 2, 3, 4, 5));

