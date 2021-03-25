export {};

class Mahotukai {}
class Souryo {}

class Taro extends Mahotukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('Ionazun!');
  }
  kougeki(): void {
    console.log('Kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
