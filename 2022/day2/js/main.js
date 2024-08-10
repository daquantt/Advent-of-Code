const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
pointsArray = [];
partTwoPointsArray = [];

submit.addEventListener("click", () => {
  //split on double new line
  inputArray = userInput.value.split(/\n/);
  console.log(inputArray);

  inputArray.forEach((item) => {
    let points = 0;
    //calculate win points
    if (item === "A Y" || item === "B Z" || item === "C X") {
      points += 6;
    }
    //calculate draw points
    if (item === "A X" || item === "B Y" || item === "C Z") {
      points += 3;
    }
    //calculate loss points
    if (item === "A Z" || item === "B X" || item === "C Y") {
      points += 0;
    }

    //calculate shape selection points
    if (item[2] === "X") {
      points += 1;
    } else if (item[2] === "Y") {
      points += 2;
    } else points += 3;

    pointsArray.push(points);
  });

  console.log(pointsArray);

  let pointsTotal = pointsArray.reduce((total, sum) => total + sum);
  result.innerText = `Part 1 Total Score = ${pointsTotal}`;

  //Part Two
  inputArray.forEach((item) => {
    let points = 0;
    //calculate win points
    if (item[2] === "Z") {
      points += 6;
    }
    //calculate draw points
    if (item[2] === "Y") {
      points += 3;
    }
    //calculate loss points
    if (item[2] === "X") {
      points += 0;
    }

    //calculate shape selection points
    //if opps select rock
    if (item === "A Z") {
      points += 2;
    } else if (item === "A Y") {
      points += 1;
    } else if (item === "A X") {
      points += 3;
    }

    //if opps select paper
    if (item === "B Z") {
      points += 3;
    } else if (item === "B Y") {
      points += 2;
    } else if (item === "B X") {
      points += 1;
    }

    //if opps select scissors
    if (item === "C Z") {
      points += 1;
    } else if (item === "C Y") {
      points += 3;
    } else if (item === "C X") {
      points += 2;
    }

    partTwoPointsArray.push(points);
  });
  let partTwoPointsTotal = partTwoPointsArray.reduce((total, sum) => total + sum);
  result2.innerText = `Part 2 Total Score = ${partTwoPointsTotal}`;

  //Opponent: A - Rock, B - Paper, C - Scissors
  //You: X - Rock, Y - Paper, Z - Scissors
  //Shape selection points: Rock-1, Paper-2, Scissors-3
  //Round points: Win-6, Draw-3, Loss-0
});
