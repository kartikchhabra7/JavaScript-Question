/*-------------------------------------for Loop----------------------------------------------*/


function sumOfAnArrayEvenNumber(arrValue) {
  let sum = 0;
  let arrLength = arrValue.length;
  for (let i = 0; i < arrLength; i++) {
    if (arrValue[i] % 2 == 0) {
      sum += arrValue[i];
    }
  }
  return sum;
}

let arr = [1, 2, 3, 4, 5];
var result = sumOfAnArrayEvenNumber(arr);
console.log(result);


/*-------------------------------------Reduce Method------------------------------------------*/


function sumWithReduceMethod(arrValue) {
  return arrValue.reduce((accm, curr) => {
    if (curr % 2 == 0) {
      return accm + curr;
    }
    return accm;
  }, 0);
}

let array = [1, 2, 3, 4, 5];
var storeResult = sumWithReduceMethod(array);
console.log(storeResult);
