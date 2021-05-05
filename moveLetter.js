let str = "agejlvreoh";
let newArr = [];
function moveLetters() {
  str = str.split("");
  for (let i = 0; i < str.length; i += 1) {
    let miniArr = str.splice(0, 3);
    changeArr = miniArr.shift();
    miniArr.push(changeArr);
    newArr.push(miniArr.join());
  }
  newArr = newArr.join();
  return newArr;
}
console.log(move.Letters());
