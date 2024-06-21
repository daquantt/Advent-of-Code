const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result");
const submitButton = document.querySelector("#submit-button");

const test = { red: 12, green: 13, blue: 14 };
const games = [];

let inputTextArray = [];

submitButton.addEventListener("click", () => {
  inputTextArray = userInput.value.split(/Game\s\d+:\s/); //split string into array
  // console.log(inputTextArray);
  const cleanInput = inputTextArray.map((item) => item.replace(/(\d+)\s(\w+)/g, "$2:$1")); //rearrange strings to color:value
  // console.log(cleanInput);

  cleanInput.forEach((item, index) => {
    let sets = item.trim().split(/[;]+/); //for each index of strings, trim spaces and split on ";" to get 3 sets/arrays
    // console.log("Game", index, sets);

    //create objects in games array to be able to add to it
    games.push({
      game: index,
    });

    let data;
    let count = 0;

    for (str of sets) {
      //create variable to set keys for sets 1-3
      count++;
      let setKey = `set${count}`;

      const inputs = str.split(","); // for each str in sets array, split on "," eg "blue:2, red:4"
      // console.log(inputs);
      data = convertToObj(inputs);
      // console.log(data);
      // console.log(games[index]);
      games[index][setKey] = data; //add object to games index on each loop
    }
  });
  console.log(games);

  let gameIds = [];

  games.forEach((line) => {
    function check(line, set, color) {
      //if line does not have a set -> break
      if (!line.hasOwnProperty(set)) {
        // console.log("line does not have a " + set);
        return;
      }

      //check set color against color limit -> if check passes push true to checkArr else push false
      if (!line[set].hasOwnProperty(color)) {
        // console.log(color);
      } else if (line[set][color] <= test[color]) {
        // console.log("true " + color);
        checkArr.push("true");
      } else {
        console.log("false " + color);
        checkArr.push("false");
      }
    }

    let checkArr = [];

    check(line, "set1", "blue");
    check(line, "set1", "green");
    check(line, "set1", "red");
    check(line, "set2", "blue");
    check(line, "set2", "green");
    check(line, "set2", "red");
    check(line, "set3", "blue");
    check(line, "set3", "green");
    check(line, "set3", "red");
    check(line, "set4", "blue");
    check(line, "set4", "green");
    check(line, "set4", "red");
    check(line, "set5", "blue");
    check(line, "set5", "green");
    check(line, "set5", "red");
    check(line, "set6", "blue");
    check(line, "set6", "green");
    check(line, "set6", "red");

    console.log(checkArr);
    console.log(checkArr.indexOf("false"));

    //if false does not exist in checkArr, push game number to gameIds array
    if (checkArr.indexOf("false") === -1) {
      gameIds.push(line.game);
    } else {
      console.log("does not pass check");
    }
  });

  console.log(gameIds);

  let sum = gameIds.reduce((total, num) => total + num);
  console.log(sum);
  result.innerText = "Sum of game IDs: " + sum;
});

//func to convert arr to obj
function convertToObj(arr) {
  const obj = {};
  for (const line of arr) {
    //for each line of array
    const data = line.trim().split(":"); //remove spaces on both ends -> split on ":" "blue:2"
    let key = data[0]; //set key as color
    let value = data[1]; //set value as number
    obj[key] = value; //add property to obj
  }
  return obj;
}

//create array of game objects
//game objects should hold blue red green props
//push the input into the array: game1 -> set3 -> blue: 1, red: 2, green: 3
//compare game colour sets against colour limits
//if all true push game # to new array
//sum new array with reduce
