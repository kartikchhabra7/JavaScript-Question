let firstValue = "army";
let secondValue = "mary";
const test = (firstStr, secondStr) => {
   let a = firstStr.split("").sort().join("");
   let b = secondStr.split("").sort().join("");
      if (a == b) {
        return true;
       } else {
         return false;
       }
     };

console.log(test(firstValue, secondValue));
