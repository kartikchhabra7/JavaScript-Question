      let StringValue = "hello";                           //One Global Value For All Methods


      /*--------------------------FOR LOOP---------------------------------*/


      const test = (str) => {
        let i,
          count = 0,
          len = str.length;
        for (i = 0; i < len; i++) {
          if (
            str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
          ) {
            console.log(str[i]);
            count++;
          }
        }
        return "vowels are " + count;
      };

      console.log(test(StringValue));


      /*------------------------FilterMethod-----------------------------------*/

      
      const filterMethod = (str) => {
        let arr = str.split("");
        let newArr = arr.filter((val) => {
          if (
            val == "a" ||
            val == "e" ||
            val == "i" ||
            val == "o" ||
            val == "u"
          ) {
            return val;
          }
        });
        return newArr + "\nvowel are " + newArr.length;
      };
      console.log(filterMethod(StringValue));

      
      /*--------------------------charAt Method----------------------------------*/


      const demo = (str) => {
        let i,
          count = 0,
          len = str.length;
        for (i = 0; i < len; i++) {
          if (
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
          ) {
            console.log(str.charAt(i));
            count++;
          }
        }
        return "vowels are " + count;
      }

      console.log(demo(StringValue));
