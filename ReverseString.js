/*              QUES-1 - > INPUT : hello how are you
                           OUTPUT: you are how hello  

                QUES-2 - > INPUT : hello how are you
                           OUTPUT: uoy era woh olleh */
      
    
      /* -------------------QUES-1--------------------------------*/

      function test(str){
        return str.split(' ').reverse().join(' ')
      }
      console.log(test('hello how are you'));

      
      /* -------------------QUES-2--------------------------------*/
      
      function demo(str){
        return str.split('').reverse().join(' ')
      }
      console.log(demo('hello how are you'));
