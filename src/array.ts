export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];

let strings: string[] = ['tokyo', 'osaka', 'kyoto'];
let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto'];

let strings3: string[] = ['TypeScript', 'JavaScript', 'React'];

let twoDimentionArray: number[][] = [
  [50, 100],
  [150, 300],
];

// UNION型で定義
// let hairetu: (number| boolean| string )[]= [1, false, 'japan'];

// TUPLE型で定義
let hairetu: [number, boolean, string] = [1, false, 'japan'];
