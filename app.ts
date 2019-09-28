import {
  minMaxbad,
  minMaxGood,
  minMaxVeryGood
} from "./src/capitulos/algoritmoHell";

var appBad = minMaxbad([1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 9], 11);

var appGood = minMaxGood([1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 9], 11);

var appVeryGood = minMaxVeryGood([1, 2, 3, 4, 5, 6, 7, 8, 9, 7], 10);

console.info(appBad);
console.info(appGood);
console.info(appVeryGood);
