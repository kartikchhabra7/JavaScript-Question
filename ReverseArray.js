/*            INPUT : [1,2,3,4,5] 
              OUTPUT: [5,4,3,2,1] */

      
      /*------------------ReduceRight Method---------------------*/
      
      let arr = [1, 2, 3, 4, 5];
      let newArr = arr.reduceRight((accm, elm) => {
        return accm + " " + elm;
      }, []);
      console.log(newArr);

      
      /*------------------Reverse Method---------------------*/

      let a = [1, 2, 3, 4, 5];
      let b = a.reverse();
      console.log(a);

      
      /*------------------Slice Method---------------------*/
      
        test = function () {
        arr = [1, 2, 3, 4, 5];
        arr
          .slice()
          .reverse()
          .forEach((val) => {
            console.log(val);
          });
      };

      test();
