Function.prototype.ccBind = function(obj){
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const that = this//Function -> say()
  let arr = [...arguments].slice(1)
  return function F(){
    if(this instanceof F){//new 的情况来说，不会被任何方式改变 this，所以对于这种情况我们需要忽略传入的 this
      console.log("new")
      return new that(...arr, ...arguments)
    }
    console.log("直接")
    return that.apply(obj, arr.concat(...arguments))
  }
}
function say(a,b){
  console.log(a+"+"+b+"="+(a+b))
}
let cc = {
  name:"cc"
}
say.ccBind(cc,1,3)()
let dd = say.ccBind(cc,2,4)//F()
const kk = new dd()
// 直接
// 1+3=4
// new
// 2+4=6