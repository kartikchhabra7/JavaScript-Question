
function findMedianArr(num1, num2) {
  const mergeArr = [...num1, ...num2];
  const sortArr = mergeArr.sort((a, b) => a - b);

  const lengthOfArr = sortArr.length;
  const sumOfAnArr = sortArr.reduce((accm, elm) => accm + elm, 0);

  const finalResult = sumOfAnArr / lengthOfArr;

  return finalResult;
}

const arrOne = [1, 3];
const arrTwo = [2];
const medianResult = findMedianArr(arrOne, arrTwo);
console.log(medianResult);
