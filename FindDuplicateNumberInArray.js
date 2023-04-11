let arrValue = [1, 2, 3, 4, 5, 1, 2, 5, 3];                 //Global Value


/*-------------------------Filter Method-----------------*/


const test = (arr) => {
        
  let newArr = arr.filter((val, id, currArr) => {
          
    return currArr.indexOf(val) !== id;
        
  });
        
  return newArr;
      
};
      
console.log(test(arrValue));

/*---------------------------Set Method--------------------*/


const setFunction = (arr) => {
        
  let newArr = new Set(arr);
        
  return [...newArr];
      
};
     
console.log(setFunction(arrValue));
