const userInput = document.querySelector("#user-input");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submitButton = document.querySelector("#submit-button");
inputArray = [];
partNumbers = [];

submitButton.addEventListener("click", () => {
  //split input on line and place into inputArray
  inputArray = userInput.value.split(/\s/);
  console.log(inputArray);

  //PART ONE
  //for each line in inputArray, do:
  inputArray.forEach((item, index) => {
    //get numbers and place in lineNumbers array
    let lineNumbers = item.match(/\d+/g);
    // console.log(lineNumbers);

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

        //check for symbols around number and push to new partNumbers
        let regex = /[^A-Za-z0-9_.]/;
        if (regex.test(startTop) || regex.test(topLeft) || regex.test(left) || regex.test(bottomLeft) || regex.test(startBottom) || regex.test(endTop) || regex.test(topRight) || regex.test(right) || regex.test(bottomRight) || regex.test(endBottom) || regex.test(middleTop) || regex.test(middleBottom)) {
          partNumbers.push(Number(item));
        }
      });
    }
  });

  // console.log(partNumbers);
  let sumPartNumbers = partNumbers.reduce((total, num) => total + num);
  // console.log(sumPartNumbers);
  result1.innerText = `Engine Number = ${sumPartNumbers}`;

  //PART TWO
  //for each line
  let indices = [];
  inputArray.forEach((item, index) => {
    //get * indexes and push to indices array
    let regex = /\*/;
    for (let i = 0; i < item.length; i++) {
      if (regex.test(item[i])) {
        indices.push({ line: index, position: i });
      }
    }
  });
  console.log(indices);

  indices.forEach((item, index) => {
    // console.log(item.length);
    let topLeft = inputArray[item.line - 1] === undefined ? 0 : inputArray[item.line - 1].slice(0, item.position).match(/^\d+$/);
    const top = () => {
      if (inputArray[item.line - 1] === undefined) {
        console.log("no top line");
        return;
      }
      // if (inputArray[item.line - 1][item.position - 1] > 0 && inputArray[item.line - 1][item.position] > 0 && inputArray[item.line - 1][item.position + 1] > 0) {
      //   return inputArray[item.line - 1].slice(item.position - 1, item.position + 2).match(/^\d+$/);
      // }
      // if (inputArray[item.line - 1][item.position - 1] > 0 && inputArray[item.line - 1][item.position] > 0) {
      //   return inputArray[item.line - 1].slice(item.position - 1, item.position + 1).match(/^\d+$/);
      // }
      // if (inputArray[item.line - 1][item.position] > 0 && inputArray[item.line - 1][item.position + 1] > 0) {
      //   return inputArray[item.line - 1].slice(item.position, item.position + 2).match(/^\d+$/);
      // }
      if (inputArray[item.line - 1][item.position] > 0) {
        return inputArray[item.line - 1].slice(item.position - 2, inputArray[item.line - 1].length).match(/\d+/);
      }
    };
    let topRight = inputArray[item.line - 1] === undefined ? 0 : inputArray[item.line - 1].slice(item.position + 1, item.position + 4).match(/^\d+$/);
    console.log(topLeft, top(), topRight);
  });
  // let topRight = inputArray[index - 1] === undefined ? 0 : inputArray[index - 1].slice(indices[0].position + 1, indices[0].position + 4).match(/\d+/);

  // let topLeft = inputArray[1] === undefined ? 0 : inputArray[1 - 1][2];

  //check top, left, right and bottom for numbers
  //if only 2 numbers around *, push product of numbers to new array
  //sum new array
});
