export {};
 
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAberage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAberage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAberage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  battingAberage: 0.28,
  throwingSpeed: 165,
};
