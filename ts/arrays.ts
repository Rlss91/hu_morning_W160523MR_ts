let numbersArr: number[];
numbersArr = [1, 2, 3, 4];

let strArr: string[];
strArr = ["a", "1", "2", "b"];

enum EColor {
  BLACK,
  RED,
  GREEN,
  BLUE,
  WHITE,
}

interface ICar {
  name: string;
  color: EColor;
}

let car: ICar = {
  name: "toyota",
  color: EColor.GREEN,
};

let carArr: ICar[];
carArr = [
  { name: "tesla", color: EColor.BLUE },
  { name: "fiatporshe", color: EColor.RED },
];
