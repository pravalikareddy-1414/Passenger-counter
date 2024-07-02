//document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch
// console.log(count);

// let myAge = 23
// let HumanDogRation = 7

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
  console.log("The button is clicked");
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.innerText += countStr;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}
