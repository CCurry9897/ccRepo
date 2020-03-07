function ccNew(){
  let obj = {}
  let Con = [...arguments].shift()
  // let Con = [].shift.call(arguments)//借用Array的方法
  obj.__proto__ = Con.prototype
  console.log(arguments)

  // console.log(Con1.prototype,"1")
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
function Stu(val){
  this.val = val
  this.say = function (){
    console.log(this.val)  
  }
}
let cc = ccNew(Stu,1)
console.log(cc instanceof Stu)
cc.say()
