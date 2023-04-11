let arrValue=[1,2,3,4,9]
      
const test=(arr)=>{
            
  let newArr=[]
            
  let minArr=Math.min(...arr)
         
  let maxArr=Math.max(...arr)
           
  for(let i=minArr;i<maxArr;i++){     
    if(arr.indexOf(i)<0){              
      newArr.push(i)             
    }           
  }      
  return newArr   
}      
console.log(test(arrValue));
