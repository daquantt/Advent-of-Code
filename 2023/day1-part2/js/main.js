const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result");
const submitButton = document.querySelector("#submit-button");

//create array/legend to get the number value of a word using its index
const wordToNumArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//func to convert word to number as a string
const convertWordToNum = (wordOrNum) => {
  if (isNaN(wordOrNum)) {
    return wordToNumArray.indexOf(wordOrNum).toString();
  }
  return wordOrNum.toString();
};

submitButton.addEventListener("click", () => {
  // get input and place each line in array
  let inputTextArray = userInput.value.split(" ");
  console.log(inputTextArray);

  let numArray = [];

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
    numArray.push(parseInt(joinedNums));
  }
  console.log(numArray);
  //use reduce method to add all values in new array
  let sum = numArray.reduce((total, num) => total + num);
  console.log(sum);
  result.innerText = "Calibration value: " + sum;
});
