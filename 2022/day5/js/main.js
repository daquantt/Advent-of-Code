const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");

//create stacks array with 9 arrays to store column data
let stacks = [[], [], [], [], [], [], [], [], []];
let stacks2 = [[], [], [], [], [], [], [], [], []];

submit.addEventListener("click", () => {
  //split on double line to get start stack and reorder procedure
  let inputArray = userInput.value.split(/\n\n/);
  let startStacks = inputArray[0];
  let reorderProcedure = inputArray[1];
  // console.log(startStacks, reorderProcedure);

  //get startStack string and split into array
  let stackRow = startStacks.split("\n").slice(0, -1);
  //loop through each row and replace blank spaces with [-]
  const columns = stackRow.map((row) => row.replace(/^\s\s\s/, "[-]").replace(/\s\s\s\s/g, " [-]"));
  //build stacks
  columns.map((row) => (row[1] !== "-" ? stacks[0].push(row[1]) : ""));
  columns.map((row) => (row[5] !== "-" ? stacks[1].push(row[5]) : ""));
  columns.map((row) => (row[9] !== "-" ? stacks[2].push(row[9]) : ""));
  columns.map((row) => (row[13] !== "-" ? stacks[3].push(row[13]) : ""));
  columns.map((row) => (row[17] !== "-" ? stacks[4].push(row[17]) : ""));
  columns.map((row) => (row[21] !== "-" ? stacks[5].push(row[21]) : ""));
  columns.map((row) => (row[25] !== "-" ? stacks[6].push(row[25]) : ""));
  columns.map((row) => (row[29] !== "-" ? stacks[7].push(row[29]) : ""));
  columns.map((row) => (row[33] !== "-" ? stacks[8].push(row[33]) : ""));
  //stacks for part 2
  columns.map((row) => (row[1] !== "-" ? stacks2[0].push(row[1]) : ""));
  columns.map((row) => (row[5] !== "-" ? stacks2[1].push(row[5]) : ""));
  columns.map((row) => (row[9] !== "-" ? stacks2[2].push(row[9]) : ""));
  columns.map((row) => (row[13] !== "-" ? stacks2[3].push(row[13]) : ""));
  columns.map((row) => (row[17] !== "-" ? stacks2[4].push(row[17]) : ""));
  columns.map((row) => (row[21] !== "-" ? stacks2[5].push(row[21]) : ""));
  columns.map((row) => (row[25] !== "-" ? stacks2[6].push(row[25]) : ""));
  columns.map((row) => (row[29] !== "-" ? stacks2[7].push(row[29]) : ""));
  columns.map((row) => (row[33] !== "-" ? stacks2[8].push(row[33]) : ""));

  //get reorderProcedure string and split into array
  let reorderArray = reorderProcedure.split("\n");
  reorderArray.forEach((row) => {
    //get move #, from stack, to stack from each row
    let moveQuantity = row.replace(/(move\s)(\d+)(\sfrom\s)(\d+)(\sto\s)(\d+)/, "$2");
    let fromStack = row.replace(/(move\s)(\d+)(\sfrom\s)(\d+)(\sto\s)(\d+)/, "$4");
    let toStack = row.replace(/(move\s)(\d+)(\sfrom\s)(\d+)(\sto\s)(\d+)/, "$6");
    console.log(moveQuantity, fromStack, toStack);
    // console.log(stacks[fromStack - 1]);

    for (let i = 0; i < Number(moveQuantity); i++) {
      //remove first crate from stack
      let crate = stacks[fromStack - 1].shift();
      //add crate to top of stack
      stacks[toStack - 1].unshift(crate);
      // console.log("crate " + crate, "from stack " + stacks[fromStack - 1], "to stack " + stacks[toStack - 1]);
    }

    //part 2

    //remove crates from stack using splice to keep order
    let crates = stacks2[fromStack - 1].splice(0, moveQuantity);
    // console.log(...crates);
    //add crates to top of stack using ... spread operator as crates is an array
    stacks2[toStack - 1].unshift(...crates);
  });

  //loop through stacks and push top crate to message array
  let message = [];
  stacks.forEach((item) => {
    message.push(item[0]);
  });
  result.innerText = `What crate ends up on top of each stack? = ${message.join("")}`;

  //Part Two
  let message2 = [];
  stacks2.forEach((item) => {
    message2.push(item[0]);
  });

  result2.innerText = `What crate ends up on top of each stack? = ${message2.join("")}`;
});
