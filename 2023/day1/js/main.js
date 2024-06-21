const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", () => {
  // get input and place each line in array
  let inputTextArray = userInput.value.split(" ");
  console.log(inputTextArray);

  let numArray = [];

  for (let i = 0; i < inputTextArray.length; i++) {
    //remove letters from each item
    let numString = inputTextArray[i].replace(/[a-z]/g, "");
    //get first number in item
    let startNum = numString.match(/^\d/);
    //get last number in item
    let endNum = numString.match(/\d$/);
    //combine first and last
    let startEndNums = startNum.concat(endNum).join("");

    //push to new array using parseInt
    numArray.push(parseInt(startEndNums));
  }
  console.log(numArray);
  //use reduce method to add all values in new array
  let sum = numArray.reduce((total, num) => total + num);
  console.log(sum);
  result.innerText = "Sum of calibration values: " + sum;
});
