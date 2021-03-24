export {};

let bmi: (height: number, weight: number, isOutput?: boolean) => number = (
  height: number,
  weight: number,
  isOutput?: boolean
): number => {
  const bmi:number = weight / (height * height);
  isOutput && console.log(bmi);
  return bmi;
};
console.log(bmi(1.68, 78,true));
