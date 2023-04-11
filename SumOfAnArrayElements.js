      /*One global value used for all methods.*/
      
      let arrValue=[1,2,3,4,5]        //Global Value
      
      
      /*------------For Loop Method----------------------*/
      
      test=function(arr){
        let i,len=arr.length,sum=0;
        for(i=0;i<len;i++){
          sum+=arr[i]
        }
        return sum
      }

      console.log(test(arrValue));


      /*------------Reduce Method----------------------*/

      demo=function(arr){
        let newArr=arr.reduce((accm,elm)=>{
          return accm+elm
        })
        return newArr
      }

      console.log(demo(arrValue));


      /*------------For Each Method----------------------*/

      fun=function(arr){
        let sum=0
        arr.forEach((val)=>{
          sum+=val
        })
        return sum
      }

      console.log(fun(arrValue));
