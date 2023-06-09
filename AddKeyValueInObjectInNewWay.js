let obj=[{
  name:'react-js',
  role:"front-end developer",
}
]

let newArr=obj.map((val)=>(({
  ...val,
  value:true
})))

console.log(newArr)
