Function.prototype.ccApply = function(obj,args){
  obj = obj || window
  obj.func = this
  let arr = [...args]
  console.log(arr)
  let result = obj.func(...arr)
  delete obj.func
  return result
}
function say(a,b){
  console.log(a+"+"+b+"="+(a+b))
}
let cc = {
  name:"cc"
}
say.ccApply(cc,[1,3])