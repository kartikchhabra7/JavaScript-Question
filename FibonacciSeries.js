const test = (number) => {
        let i,
          f = 0,
          s = 1,
          next;
        for (i = 1; i <= number; i++) {
          console.log(f);
          next = f + s;
          f = s;
          s = next;
        }
      };

      test(5);
