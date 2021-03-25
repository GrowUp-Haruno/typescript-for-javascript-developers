export {};

//  * owner
//    * 所有者
//    * 初期化時に設定できること
//    * 途中で変更できないこと
//    * 参照可
//  * secretNumber
//    * 個人番号
//    * 初期化時に設定できること
//    * 途中で変更できること
//    * 参照不可

class MynumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MynumberCard('daisuke', 123456789);

console.log(card.owner);

console.log(card.debugPrint());
card.secretNumber = 987654321;
console.log(card.debugPrint());
