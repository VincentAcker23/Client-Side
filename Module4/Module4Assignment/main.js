let button = document.querySelector("#button");
let restart = document.querySelector("#restart");
let textfield = document.querySelector("#textfield");
let msg = document.querySelector("#msg");
button.addEventListener("click", onSumbit);
restart.addEventListener("click", start);
start();
function start() {
  random();
}
function onSumbit(e) {
  e.preventDefault();
  let val = textfield.value;
  let num_to_compare = random();
  if (val == num_to_compare.toString()) {
    msg.textContent = "Congratulations!! You guessed the correct ";
  } else {
    msg.textContent = "Too Low";
    console.log(val);
    console.log(num_to_compare);
  }
}
function random() {
  let num = Math.random() * 10;
  let finalnum = Math.ceil(num);
  return finalnum;
}
