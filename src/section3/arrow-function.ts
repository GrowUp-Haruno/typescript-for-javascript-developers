export {};

let bmi: (height: any, weight: any) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.68, 68));
