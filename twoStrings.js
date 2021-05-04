let str = "This is some text.";
let str1 = "is";
function twoStrings() {
  let newStr = str.split(str1).join("");
  return newStr;
}

console.log(twoStrings());
