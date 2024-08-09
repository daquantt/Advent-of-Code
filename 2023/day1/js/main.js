const userInput = document.querySelector("#user-input");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submitButton = document.querySelector("#submit-button");

//create array/legend to get the number value of a word using its index
const wordToPartTwoArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//func to convert word to number as a string
const convertWordToNum = (wordOrNum) => {
  if (isNaN(wordOrNum)) {
    return wordToPartTwoArray.indexOf(wordOrNum).toString();
  }
  return wordOrNum.toString();
};

submitButton.addEventListener("click", () => {
  // get input and place each line in array
  let inputTextArray = userInput.value.split(" ");
  console.log(inputTextArray);

  // PART ONE
  let partOneArray = [];

  for (let i = 0; i < inputTextArray.length; i++) {
    //remove letters from each item
    let numString = inputTextArray[i].replace(/[a-z]/g, "");
    //get first number in item
    let startNum = numString.match(/^\d/) == null ? [0] : numString.match(/^\d/);
    //get last number in item
    let endNum = numString.match(/\d$/) == null ? [0] : numString.match(/\d$/);
    //combine first and last
    let startEndNums = startNum.concat(endNum).join("");
    console.log(startEndNums);

    //push to new array using parseInt
    partOneArray.push(parseInt(startEndNums));
  }
  console.log(partOneArray);
  //use reduce method to add all values in new array
  let partOneSum = partOneArray.reduce((total, num) => total + num);
  console.log(partOneSum);
  result1.innerText = "Part 1 - Sum of calibration values: " + partOneSum;

  //PART TWO
  let partTwoArray = [];

  for (let i = 0; i < inputTextArray.length; i++) {
    //get first number/word in item, then use convert func
    let startNum = inputTextArray[i].match(/\d|zero|one|two|three|four|five|six|seven|eight|nine/g).shift();
    let convertedStartNum = convertWordToNum(startNum);
    console.log(convertedStartNum);

    //to get last number in item
    //get inputTextArray[i] -> split it and assign to new array ->
    //loop thru and check if input match regex ->
    //if regex not matched, pop() last letter in new array using splice ->
    //join again and assign as input
    let endNum;
    let lastNumRegex = /\d$|zero$|one$|two$|three$|four$|five$|six$|seven$|eight$|nine$/;
    let input = inputTextArray[i];
    let arrayA = input.split("");

    for (let i = input.length; i > 0; i--) {
      if (input.match(lastNumRegex)) {
        endNum = input.match(lastNumRegex).pop();
        // console.log(endNum);
        break;
      }
      arrayA.splice(-1);
      input = arrayA.join("");
      // console.log(arrayA);
    }

    let convertedEndNum = convertWordToNum(endNum);
    console.log(convertedEndNum);

    //combine first and last number strings
    let joinedNums = convertedStartNum.concat(convertedEndNum);

    // push to new array using parseInt
    partTwoArray.push(parseInt(joinedNums));
  }
  console.log(partTwoArray);
  //use reduce method to add all values in new array
  let sum = partTwoArray.reduce((total, num) => total + num);
  console.log(sum);
  result2.innerText = "Part 2 - Calibration value: " + sum;
});
