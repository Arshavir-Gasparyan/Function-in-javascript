let arr = [];
let number = Number;
function returnLargestNumber(arr, number) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length === 0) {
    return "Such values do not exist.";
  } else {
    return newArr;
  }
}

console.log(returnLargestNumber([5, 27, 3, 11, 9, 82], 8));
