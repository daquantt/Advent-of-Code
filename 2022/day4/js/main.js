const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");

let count = 0;
let overlapCount = 0;

submit.addEventListener("click", () => {
  //split on new line
  let inputArray = userInput.value.split(/\n/);
  // console.log(inputArray);

  inputArray.forEach((item) => {
    //get sections from pairs
    let section1 = item.match(/^\d+-\d+/).toString();
    let section2 = item.match(/\d+-\d+$/).toString();
    // console.log(section1, section2);

    //create array from sections
    let section1Array = createNumberArray(section1);
    let section2Array = createNumberArray(section2);
    console.log(section1Array, section2Array);

    //check if all of section1 numbers are in section2
    let isSection1FullyContained = false;
    for (let i = 0; i < section1Array.length; i++) {
      if (section2Array.includes(section1Array[i])) {
        isSection1FullyContained = true;
      } else {
        isSection1FullyContained = false;
        break;
      }
    }
    //check if all of section2 numbers are in section1
    let isSection2FullyContained = false;
    for (let i = 0; i < section2Array.length; i++) {
      if (section1Array.includes(section2Array[i])) {
        isSection2FullyContained = true;
      } else {
        isSection2FullyContained = false;
        break;
      }
    }

    //if either section contains the other, add 1 to count
    if (isSection1FullyContained === true || isSection2FullyContained === true) {
      count++;
    }

    //Part Two
    //if any number from section1Array is in section2Array, add 1 to overlapCount
    for (let i = 0; i < section1Array.length; i++) {
      if (section2Array.includes(section1Array[i])) {
        overlapCount++;
        break;
      }
    }
  });

  result.innerText = `How many assignment pairs does one range fully contain the other = ${count}`;
  result2.innerText = `How many assignment pairs do the ranges overlap? = ${overlapCount}`;
});

//function to take 12-44 as parameter and out array
function createNumberArray(string) {
  let startNumber = Number(string.match(/^\d+/));
  let endNumber = Number(string.match(/\d+$/));
  let array = [];
  for (let i = startNumber; i < endNumber + 1; i++) {
    array.push(i);
  }
  return array;
}
