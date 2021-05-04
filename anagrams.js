let arr = ["enlists", "google", "inlets", "banana"];
let str = "listen";
let newArr = [];
function compare() {
  let x = str.split("").sort().join();
  for (let i = 0; i < arr.length; i++) {
    let y = arr[i].split("").sort().join();
    if (x === y) {
      newArr.push(arr[i]);
      //   return newArr;
    }
  }
}
compare();
console.log(newArr);
