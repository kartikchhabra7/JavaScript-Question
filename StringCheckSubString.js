function strSubstring(strValue,checkStr){
  if(strValue.includes(checkStr)){
    return true
  }
  else{
    return false
  }
}

var result=strSubstring("ReactJs is my favourite","favourite")
console.log(result)
