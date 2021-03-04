let sudokuArray = [],
  sudokuAns = [];

let size, difficult;

function createSudoku(s, d) {
  size = parseInt(s, 10);
  difficult = parseInt(d, 10);
  sudokuAns = [];
  sudokuArray = [];
  createBasicSudoku();
}
function createBasicSudoku() {
  let prefill = [...Array(size ** 2).keys()].map((x) => {
    x++;
    if (x > 9) {
      return String.fromCharCode(x + 55);
    }
    return x.toString();
  });
  let a = 0,
    b = -1;
  for (let i = 0; sudokuArray.length < size ** 2; i += 2) {
    sudokuArray.push([]);
    if (a % 3 === 0) {
      b++;
    }
    for (let j = 0; j < size ** 2; j += 1) {
      let k = startAgian(j + a + i + b, size ** 2);
      sudokuArray[a].push(prefill[k]);
    }
    a++;
  }
  sortSudoku();
}

function sortSudoku() {
  let itteration = Math.floor(Math.random() * 100 - 70) + 70;
  for (let i = 0; i < itteration; i++) {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
      case 0:
        transpose();
        break;
      case 1:
        switchBigRow();
        break;
      case 2:
        switchRow();
        break;
      default:
        break;
    }
  }
  voider();
}

function voider() {
  let counter = 0;
  let c = difficult * 3;
  sudokuAns = sudokuArray.map((row) =>
    row.map((cell, i) => {
      if (Math.random() > 1 - difficult / 100 && counter < c) {
        size === 4 ? counter++ : (counter += 3);
        return 0;
      }
      return cell;
    })
  );
}

function transpose() {
  let memArray = sudokuArray[0].map((col, i) => sudokuArray.map((row) => row[i]));
  sudokuArray = memArray;
}

function switchRow() {
  let firstRowArray = [];
  let a = Math.floor(Math.random() * size);
  let diff = Math.floor(Math.random() * (size - 1)) + 1;
  for (let i = 0; i < size ** 2; i += 3) {
    firstRowArray.push(i);
  }
  let memRow = sudokuArray[firstRowArray[a]];
  sudokuArray[firstRowArray[a]] = sudokuArray[firstRowArray[a] + diff];
  sudokuArray[firstRowArray[a] + diff] = memRow;
}

function switchBigRow() {
  let firstRowArray = [];
  let a = Math.floor(Math.random() * size);
  for (let i = 0; i < size ** 2; i += 3) {
    firstRowArray.push(i);
  }
  for (let j = 0; j < size; j++) {
    let memRow = sudokuArray[j];
    sudokuArray[j] = sudokuArray[firstRowArray[a] + j];
    sudokuArray[firstRowArray[a] + j] = memRow;
  }
}

function startAgian(number, size) {
  if (number >= size) {
    return number % size;
  }
  return number;
}


export { sudokuArray, sudokuAns, createSudoku };
