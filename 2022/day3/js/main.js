const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
let priorities = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let pointsArray = [];
let pointsArray2 = [];

submit.addEventListener("click", () => {
  //split on new line
  let inputArray = userInput.value.split(/\n/);
  // console.log(inputArray);

  inputArray.forEach((item) => {
    //slice on item length/2
    let firstCompartment = item.slice(0, item.length / 2);
    let secondCompartment = item.slice(item.length / 2, item.length);
    // console.log(firstCompartment, secondCompartment);

    //loop through 1st compartment and check if letter is included on 2nd compartment. break loop on first match
    for (let i = 0; i < firstCompartment.length; i++) {
      if (secondCompartment.includes(firstCompartment[i])) {
        let match = firstCompartment[i];
        let points = priorities.indexOf(match) + 1;
        pointsArray.push(points);
        break;
      }
    }
  });

  let pointsTotal = pointsArray.reduce((total, sum) => total + sum);
  result.innerText = `Sum of Priorities = ${pointsTotal}`;

  //Part Two
  //split on nth(3) line using regex.
  let inputArray2 = userInput.value.match(/(?:.+\n?){3}/g);
  // console.log(inputArray2);

  inputArray2.forEach((item) => {
    //remove \n from end of string
    let formattedItem;
    if (item.match(/\n$/)) {
      formattedItem = item.replace(/\n$/, "");
    } else {
      formattedItem = item;
    }

    //split string into group of 3
    let group = formattedItem.split(/\n/);
    // console.log(group);

    //search for matching item types in group
    for (let i = 0; i < group[0].length; i++) {
      if (group[1].includes(group[0][i]) && group[2].includes(group[0][i])) {
        let match = group[0][i];
        let points = priorities.indexOf(match) + 1;
        pointsArray2.push(points);
        break;
      }
    }
  });

  let pointsTotal2 = pointsArray2.reduce((total, sum) => total + sum);
  result2.innerText = `Part Two - Sum of Priorities = ${pointsTotal2}`;
});
