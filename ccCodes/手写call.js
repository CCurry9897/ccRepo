Function.prototype.ccCall = function(obj){
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  obj = obj || window
  obj.func = this
  console.log(arguments)
  let arr = [...arguments].slice(1)
  //[Arguments] { '0': { name: 'cc', func: [Function: say] }, '1': 1, '2': 3 }
  //slice(1)把'0': { name: 'cc', func: [Function: say] },去掉，获取参数
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
say.ccCall(cc,1,3)