let onWatch = (obj,setB,getL)=>{
  let handler = {
    set(target,property,val){
      setB(val,property)
      return Reflect.set(target,property,val)
    },
    get(target,property){
      getL(target,property)
      return Reflect.get(target,property)
    }
  }
  return new Proxy(obj,handler)
}
let obj = {name:"curry"}
let p = onWatch(obj,
  (v,property)=>{
    console.log(`我看到属性${property}变成了${v}`)
  },
  (target,property)=>{
    console.log(`'${property}'=${target[property]}`)
  })
  p.name
  p.name = "kobe"
  p.name