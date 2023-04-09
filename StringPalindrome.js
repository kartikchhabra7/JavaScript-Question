/* 		        INPUT : lol 
              OUTPUT: true	  */

      test = function (str) {
        let splitStr = str.split("");
        let reverseStr = splitStr.reverse();
        let joinStr = reverseStr.join("");

        if (str == joinStr) {
          return true;
        } else {
          return false;
        }
      };

      console.log(test("lol"));
