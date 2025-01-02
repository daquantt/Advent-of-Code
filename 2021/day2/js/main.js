const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
const clear = document.querySelector("#clear-button");

submit.addEventListener("click", () => {
  //split on new line
  let inputArray = userInput.value.split(/\n/)

  let horizontal = 0
  let depth = 0

  //loop through array, use regex to get text command and number
  for (let i = 0; i < inputArray.length; i++) {
    let commandDirection = String(inputArray[i].match(/^[a-z]+/))
    let commandNumber = parseInt(inputArray[i].match(/[0-9]+$/))
    
    console.log(commandDirection, commandNumber);

    switch (commandDirection) {
      case 'forward':
        horizontal += commandNumber
        break;
      case 'down':
        depth += commandNumber
        break;
      case 'up':
        depth -= commandNumber
        break;
    }    
  }

  console.log(horizontal, depth);
  result.innerHTML = `
    <h2>Part One</h2>
    <p>Final horizontal position = ${horizontal} | Final depth = ${depth} | Horizontal * Depth = ${horizontal * depth}</p>`;

  //Part Two
  let horizontal2 = 0
  let depth2 = 0
  let aim = 0

  //loop through array, use regex to get text command and number
  for (let i = 0; i < inputArray.length; i++) {
    let commandDirection = String(inputArray[i].match(/^[a-z]+/))
    let commandNumber = parseInt(inputArray[i].match(/[0-9]+$/))
    
    switch (commandDirection) {
      case 'forward':
        horizontal2 += commandNumber
        depth2 += (aim * commandNumber)
        break;
      case 'down':
        aim += commandNumber
        break;
      case 'up':
        aim -= commandNumber
        break;
    }    
  }

  console.log(horizontal2, depth2);

  result2.innerHTML = `
    <h2>Part Two</h2>
    <p>Final horizontal position = ${horizontal2} | Final depth = ${depth2} | Horizontal * Depth = ${horizontal2 * depth2}</p>`;
});

clear.addEventListener("click", () => {
  userInput.value = "";
  result.innerHTML = "";
  result2.innerHTML = "";
});

