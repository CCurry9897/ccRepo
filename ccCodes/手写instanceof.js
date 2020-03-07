function ccInstanceof(left,right){
  let prototype = right.prototype
  left = left.__proto__
  while(true){
    if(left === null||left === undefined){
      return false
    }
    if(prototype === left){
      return true
    }
    left = left.__proto__
  }
}
var cc = {name:"cc"}
var result = ccInstanceof(cc,Object)
console.log(result)


