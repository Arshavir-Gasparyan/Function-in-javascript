let arr = [13, 22, 1, 59, 26];
let odd = [];
let even = [];
function oddEvan() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
}
oddEvan();
console.log(odd);
console.log(even);
