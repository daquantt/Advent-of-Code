let input = "djbcgrrtqdshpqqzj43rgcr6";

submitButton.addEventListener("click", () => {
  inputTextArray = userInput.value.split(/Game\s\d:\s/);
  console.log(inputTextArray);

  inputTextArray.forEach((item, index) => {
    let set1 = item
      .split(";")
      .shift()
      .replace(/(\d+)\s(\w+)/g, "$2: $1")
      .split(",");
    console.log("set1:", set1);
    let set2 = item.split(";").splice(1, 1);
    console.log("set2:", set2);
    games.push({
      id: index,
      set1: { blue: 0, green: 1, red: 2 },
      set2: { blue: 0, green: 1, red: 2 },
      set3: { blue: 0, green: 1, red: 2 },
    });
  });
});
