const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
const clear = document.querySelector("#clear-button");

submit.addEventListener("click", () => {
  //split string on each character
  let inputArray = userInput.value.split("");
  // console.log(inputArray);

  //loop through starting from position 4
  for (let i = 4; i < inputArray.length; i++) {
    //get previous 4 chars
    let previous4Characters = inputArray.slice(i - 4, i);
    // console.log(previous4Characters);

    //check if duplicates exist in 4 chars
    let hasDuplicates = false;
    for (let i = 0; i < previous4Characters.length; i++) {
      let firstIndex = previous4Characters.indexOf(previous4Characters[i]);
      let lastIndex = previous4Characters.lastIndexOf(previous4Characters[i]);

      //if duplicate found, set to true and break loop
      if (firstIndex !== lastIndex) {
        hasDuplicates = true;
        break;
      }
    }

    //if no duplicate, return current index
    if (hasDuplicates === false) {
      console.log(i);
      result.innerText = `Characters need to be processed before the first start-of-packet marker is detected? = ${i}`;
      break;
    }
  }

  //Part Two
  for (let i = 14; i < inputArray.length; i++) {
    let previous14Characters = inputArray.slice(i - 14, i);
    // console.log(previous4Characters);

    let hasDuplicates = false;

    for (let i = 0; i < previous14Characters.length; i++) {
      let firstIndex = previous14Characters.indexOf(previous14Characters[i]);
      let lastIndex = previous14Characters.lastIndexOf(previous14Characters[i]);
      if (firstIndex !== lastIndex) {
        hasDuplicates = true;
        break;
      }
    }

    if (hasDuplicates === false) {
      console.log(i);
      result2.innerText = `Characters need to be processed before the first start-of-message marker is detected? = ${i}`;
      break;
    }
  }
});

clear.addEventListener("click", () => (userInput.value = ""));
