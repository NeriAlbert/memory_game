import pictures from "./data";

function repeatArray(arr) {
  let temporaryArr = arr.concat(arr);
  return temporaryArr;
}

function random(arrLength) {
  return Math.floor(Math.random() * arrLength);
}

function shuffle(arr) {
  let temporaryArr = [];
  arr.forEach((v) => {
    let i = random(arr.length);
    while (temporaryArr[i]) {
      i = random(arr.length);
    }
    temporaryArr[i] = v;
  });
  return temporaryArr;
}

export default function newArr(num) {
  if (num) {
    const pictures2 = pictures.slice(0, num);
    return shuffle(repeatArray(pictures2));
  }
}
