const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
const clear = document.querySelector("#clear-button");

submit.addEventListener("click", () => {
  //split on new line and convert each item from string to number for comparison
  let inputArray = userInput.value.split(/\n/)
  let numArray = inputArray.map((item) => parseInt(item))

  console.log(numArray)

  let increaseCount = 0

  //iterate through numArray starting from 2nd number and compare to previous number
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > numArray[i-1]) {
      increaseCount++
    }
  }

  console.log(increaseCount)

  result.innerHTML = `
    <h2>Part One</h2>
    <p>How many measurements are larger than the previous measurement? = ${increaseCount}</p>`;

  //Part Two
  let increaseSumCount = 0
  
  //iterate through numArray starting from 4th number which will be current number
  for (let i = 3; i < numArray.length; i++) {
    //add i and previous 2 numbers to get current sum
    let currentNum = numArray[i] + numArray[i-1] + numArray[i-2]
    //add previous 3 numbers to get previous sum
    let previousNum = numArray[i-1] + numArray[i-2] + numArray[i-3]

    if (currentNum > previousNum) {
      increaseSumCount++
    }    
  }

  result2.innerHTML = `
    <h2>Part Two</h2>
    <p>How many sums are larger than the previous sum? = ${increaseSumCount}</p>`;
});

clear.addEventListener("click", () => {
  userInput.value = "";
  result.innerHTML = "";
  result2.innerHTML = "";
});

