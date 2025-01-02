const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
const clear = document.querySelector("#clear-button");

submit.addEventListener("click", () => {
  //split on double line to get start stack and reorder procedure
  let inputArray = userInput.value.split(/\n\n/);

  // result.innerText = `Result = ${message.join("")}`;

  //Part Two

  // result2.innerText = `Result = ${message2.join("")}`;
});

clear.addEventListener("click", () => {
  userInput.value = "";
});
