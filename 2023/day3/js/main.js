//split input on line and place into inputArray
//for each line in inputArray, do:
//get numbers and place in lineNumbers array
//for each number get beginning and ending index of numbers from inputArray
//check for symbol around number using +1 or -1 to inputArray index
//push to engineNumbers if symbol exists

const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result");
const submitButton = document.querySelector("#submit-button");
inputArray = [];
engineNumbers = [];

submitButton.addEventListener("click", () => {
  //split input on line and place into array 1
  inputArray = userInput.value.split(/\s/);
  console.log(inputArray);

  inputArray.forEach((item, index) => {
    ////get numbers and place in lineNumbers array
    lineNumbers = item.match(/\d+/g);
    console.log(lineNumbers);

    //if no number in line, clg a note
    if (lineNumbers === null) {
      // console.log("No numbers in line");
    } else {
      //for each number, get beginning and ending index of numbers from inputArray
      let endIndex = 0;

      lineNumbers.forEach((item) => {
        // console.log(item);
        //b/c duplicate numbers exist on lines, as u loop tru, use the endIndex as the search start position for indexOf
        let startIndex = inputArray[index].indexOf(item, endIndex);
        endIndex = startIndex + item.length - 1;
        // console.log(startIndex, endIndex);

        //get the positions around the number using +1 or -1 to inputArray index
        let startTop = inputArray[index - 1] === undefined ? 0 : inputArray[index - 1][startIndex];
        let middleTop = inputArray[index - 1] === undefined ? 0 : inputArray[index - 1][startIndex + 1];
        let topLeft = inputArray[index - 1] === undefined ? 0 : inputArray[index - 1][startIndex - 1];
        let left = inputArray[index][startIndex - 1] === undefined ? 0 : inputArray[index][startIndex - 1];
        let bottomLeft = inputArray[index + 1] === undefined || inputArray[index + 1][startIndex - 1] === undefined ? 0 : inputArray[index + 1][startIndex - 1];
        let startBottom = inputArray[index + 1] === undefined ? 0 : inputArray[index + 1][startIndex];
        let middleBottom = inputArray[index + 1] === undefined ? 0 : inputArray[index + 1][startIndex + 1];
        let endTop = inputArray[index - 1] === undefined ? 0 : inputArray[index - 1][endIndex];
        let topRight = inputArray[index - 1] === undefined ? 0 : inputArray[index - 1][endIndex + 1];
        let right = inputArray[index][endIndex + 1] === undefined ? 0 : inputArray[index][endIndex + 1];
        let bottomRight = inputArray[index + 1] === undefined || inputArray[index + 1][endIndex + 1] === undefined ? 0 : inputArray[index + 1][endIndex + 1];
        let endBottom = inputArray[index + 1] === undefined ? 0 : inputArray[index + 1][endIndex];

        //check for symbols around number and push to new engineNumbers
        let regex = /[^A-Za-z0-9_.]/;
        if (regex.test(startTop) || regex.test(topLeft) || regex.test(left) || regex.test(bottomLeft) || regex.test(startBottom) || regex.test(endTop) || regex.test(topRight) || regex.test(right) || regex.test(bottomRight) || regex.test(endBottom) || regex.test(middleTop) || regex.test(middleBottom)) {
          engineNumbers.push(Number(item));
        }
      });
    }
  });

  console.log(engineNumbers);
  let sum = engineNumbers.reduce((total, num) => total + num);
  console.log(sum);
  result.innerText = `Engine Number = ${sum}`;
});
