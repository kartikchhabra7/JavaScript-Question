/*A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type. */


/*WAP to remove duplicany using set */


let arr=[1,1,12,3,2,5,6]
let newSet=new Set(arr)

console.log(newSet)

console.log([...newSet])	      //In set method data always save in objject format but with the help of spread operator we can store set's data in the array format



/*WAP to add data using set's add method */

let arr=[1,12,3,2,5,6]
let newSet=new Set(arr)
let obj={
  name:'javascript',
  
}
newSet.add(45)
newSet.add(obj)
console.log(newSet)



/*WAP to delete data using set's delete method*/

let arr=[1,12,3,2,5,6]
let newSet=new Set(arr)

newSet.delete(5)
console.log(newSet)


/*WAP to check length of set using set's size method*/


let arr=[1,12,3,2,5,6]
let newSet=new Set(arr)

console.log(newSet)
console.log(newSet.size)


/*WAP to check existing variable is there in set if yes then print true else false*/


let arr=[1,12,3,2,5,6]
let newSet=new Set(arr)


console.log(newSet)
console.log(newSet.has(12))
