const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");

let pointsArray = [];
let pointsArray2 = [];

submit.addEventListener("click", () => {
  //split on new line
  let inputArray = userInput.value.split(/\n/);
  // console.log(inputArray);

  inputArray.forEach((item) => {});

  // let pointsTotal = pointsArray.reduce((total, sum) => total + sum);
  // result.innerText = `Sum of Priorities = ${pointsTotal}`;

  //Part Two
});
