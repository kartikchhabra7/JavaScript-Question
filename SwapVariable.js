       /*---------------------THIRD VARIABLE------------------*/
      
      const test = () => {
        let a = 1;
        let b = 2;
        let temp;

        console.log("Before Swapping");
        console.log("a", a);
        console.log("b", b);
        temp = a;
        a = b;
        b = temp;
        console.log("After Swapping");
        console.log("a", a);
        console.log("b", b);
      };

      test();


      /*--------------------ARRAY DESTRUCTURING------------------*/

      const demo = () => {
        let a = 1;
        let b = 2;
        console.log("Before Swapping");
        console.log("a", a);
        console.log("b", b);

        [a, b] = [b, a];

        console.log("After Swapping");
        console.log("a", a);
        console.log("b", b);
      };
      demo();

      /*-------------------WITHOUT THIRD VARIABLE---------------------*/

      const fun=()=>{
        let a=1
        let b=2
        
        console.log("Before Swapping");
        console.log("a", a);
        console.log("b", b);

        a=a+b
        b=a-b
        a=a-b

        console.log("After Swapping");
        console.log("a", a);
        console.log("b", b);
      }

      fun()
