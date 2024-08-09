const userInput = document.querySelector("#user-input");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
inputArray = [];
pointsArray = [];

submit.addEventListener("click", () => {
  //split input on line and place into inputArray
  inputArray = userInput.value.split(/\n/);
  const formattedInput = inputArray.map((item) => item.replace(/Card\s+\d+:\s+/, ""));
  console.log(formattedInput);

  formattedInput.forEach((item, index) => {
    //split on spaces
    let split = item.split(/\s+/);

    //get winning nums by for loop and break on |
    let winNumbers = [];
    for (let i = 0; i < split.length; i++) {
      if (!isNaN(split[i])) {
        winNumbers.push(split[i]);
      } else break;
    }
    // console.log("win nums " + winNumbers);

    //get other nums by reverse split array, loop and break on |
    let randomNumbers = [];
    let reverseSplit = split.reverse();
    for (let i = 0; i < reverseSplit.length; i++) {
      if (!isNaN(reverseSplit[i])) {
        randomNumbers.push(reverseSplit[i]);
      } else break;
    }
    // console.log("random " + randomNumbers);

    let winningNumbers = [];
    winNumbers.forEach((item) => {
      if (randomNumbers.indexOf(item) >= 0) {
        winningNumbers.push(item);
      }
    });
    console.log("winning " + winningNumbers);

    let points = 0;
    const calculatePoints = () => {
      if (winningNumbers.length === 0) {
        points = 0;
      } else if (winningNumbers.length === 1) {
        points = 1;
      } else {
        let power = winningNumbers.length - 1;
        points = 2 ** power;
      }
    };

    calculatePoints();
    console.log(points);
    pointsArray.push(points);
  });

  let totalPoints = pointsArray.reduce((total, num) => total + num);
  // console.log(totalPoints);
  result1.innerText = `Total Points = ${totalPoints}`;
});
