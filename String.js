console.log("hii");

let name = "chandan samantaray";
function splitChange(name) {
  return name.split("");
}
let data = splitChange(name);

console.log(data);

let value = "abcdcba";

function isPalidrom(value) {
  let splitValue = value.split("");

  console.log(splitValue);
  for (let i = 0; i < (splitValue.length - 1) / 2; i++) {
    let start = splitValue[i];
    let end = splitValue[splitValue.length - 1 - i];
    console.log(start, end);

    if (start != end) {
      return false;
    }
  }

  return true;
}

console.log(isPalidrom(value));
