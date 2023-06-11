//  ------------------------ForEach Method----------------------------------------

function strTest() {
  let str = "hello";
  let splitStr = str.split("");
  let count = 0;
  splitStr.forEach((value) => {
    if (
      value == "a" ||
      value == "e" ||
      value == "i" ||
      value == "o" ||
      value == "u"
    ) {
      count++;
      console.log(value);
    }
  });
  console.log(count);
}

strTest();


//  ----------------------------------For Loop--------------------------------------

let str = "hello";
let len = str.length;
let i,count = 0;
for (i = 0; i < len; i++) {
  if (
    str.charAt(i) == "a" ||
    str.charAt(i) == "e" ||
    str.charAt(i) == "i" ||
    str.charAt(i) == "o" ||
    str.charAt(i) == "u"
  ) {
    count++;
    console.log(str[i]);
  }
}

console.log(count);
