      /*-----------------REDUCE METHOD------------------------------------------------*/
      const arr = [1, 2, 3, 4, 5];
      const newArr = arr.reduce((accm, elm) => {
        return accm > elm ? accm : elm;
      });
      console.log(newArr);


      /*---------------- MATH OBJECT WITH SPREAD OPERATOR--------------------------*/

      const array = [1, 2, 3, 4, 5];
      const newArray = Math.max(...array);
      console.log(newArray);

     
      /*------------------MATH OBJECT WITH APPLY METHOD----------------------------*/

      function test(arr) {
        newArr = Math.max.apply("", arr);
        return newArr;

        console.log(test([1, 2, 3, 4, 5]));
      }


      /*-----------------------------FOR LOOP---------------------------------------*/

      function demo(arr) {
        let i,
          max = 0,
          len = arr.length;
        for (i = 0; i < len; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return max;
      }
      console.log(demo([1, 2, 3, 4, 5]));

      
      /*-------------------------------FOR EACH METHOD-------------------------------*/
      function fun(arr) {
        let max = 0;
        arr.forEach((val) => {
          if (val > max) {
            max = val;
          }
        });
        return max;
      }
      console.log(fun([1, 2, 3, 4, 5]));
