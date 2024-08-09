const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const submit = document.querySelector("#submit-button");
let elfArray = [];
let elfTotalCalories = [];
pointsArray = [];

submit.addEventListener("click", () => {
  //split on double new line
  inputArray = userInput.value.split(/\n\n/);
  // console.log(inputArray);

  //split items in new array on new line
  inputArray.forEach((item) => {
    elfArray.push(item.split(/\n/));
  });
  // console.log(elfArray);

  //for each item, use reduce to get total. change string to number
  elfArray.forEach((item) => {
    let total = item.reduce((total, num) => Number(total) + Number(num));
    elfTotalCalories.push(Number(total));
  });
  // console.log(elfTotalCalories);

  //sort and pop last number to get highest
  let max = elfTotalCalories.sort((a, b) => a - b).pop();
  console.log(max);
  result.innerText = `Total Calories carried by any 1 elf = ${max}`;
});
