      /*		        INPUT: [7, 5, 12, 4, 2, 10]
                    OUTPUT:[2, 4, 5, 7, 10, 12]  */

              
      /*-----------------SORT METHOD-----------------------------*/

      let Arr = [7, 5, 12, 4, 2, 10];

      const test = (array) => {
        let newArr = array.sort((a, b) => {
          return a - b;
        });
        return newArr;
      };

      let result = test(Arr);
      console.log(result);


      /*-----------------FOR LOOP-----------------------------*/

      const demo = (arr) => {
        let i,
          j,
          temp,
          len = arr.length;

        for (i = 1; i < len; i++) {
          for (j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
        return arr;
      };
      console.log(demo([7, 5, 12, 4, 2, 10]));
