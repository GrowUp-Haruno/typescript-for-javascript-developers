export {};

class VisaCard {
  constructor(public readonly owner:string, readonly secretNumber:number) {}
}

let myVisaCard = new VisaCard("daisuke", 123456789)

console.log(myVisaCard)
