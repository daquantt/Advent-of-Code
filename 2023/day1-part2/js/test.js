let input = "djbcgrrtqdshpqqzj43rgcr6";
let arrayA = input.split("");
console.log(arrayA.length);
let regex = /\d$|zero$|one$|two$|three$|four$|five$|six$|seven$|eight$|nine$/;

for (let i = input.length; i > 1; i--) {
  if (input.match(regex)) {
    let endNum = input.match(regex).pop();
    console.log("endNum =", endNum);
    break;
  }
  arrayA.splice(-1);
  input = arrayA.join("");
  console.log(arrayA);
}
