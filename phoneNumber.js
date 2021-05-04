let str = "+5454457795651";
function validNumber() {
  if (str[0] === "+") {
    str = str.slice(1);
    if (str.length === 10 && Number(str)) {
      return "good number";
    } else {
      return "bad number";
    }
  } else if (str.length === 10 && Number(str)) {
    // console.log("good");
    return "good number";
  } else {
    return "bad number";
  }
}
console.log(validNumber());
