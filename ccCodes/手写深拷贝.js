function ccDeepClone(target){
  if(typeof target === 'object'){
    let cloneTarget = Array.isArray(target) ? []:{}
    for(const v in target){
      cloneTarget[v] = ccDeepClone(target[v])
    }
    return cloneTarget
  }else{
    return target
  }
}
let cc = {
  name:"curry",
  age:"21",
  friends:{
    name:"kb",
    sayHi:()=>{
      console.log("hello!!!!!")
    }
  }
}
let dd = ccDeepClone(cc)
cc.name = "king"
console.log(cc)
console.log(dd)
// { name: 'king',
//   age: '21',
//   friends: { name: 'kb', sayHi: [Function: sayHi] } }
// { name: 'curry',
//   age: '21',
//   friends: { name: 'kb', sayHi: [Function: sayHi] } }