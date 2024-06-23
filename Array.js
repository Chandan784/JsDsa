// greatest number

let arr = [2, 20, 5, 4, 2];

function findGreaterNum(arr) {
  let bigNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (bigNum < arr[i]) {
      bigNum = arr[i];
    }
  }
  return bigNum;
}

console.log(findGreaterNum(arr));

//swap array index

function swapArrIndex(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

console.log(swapArrIndex(arr, 0, 2));

//reverse array
console.log(arr);
function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    swapArrIndex(arr, start, end);
    start++;
    end--;
  }

  function swapArrIndex(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  return arr;
}

console.log(reverseArr(arr));
