function deepRepeat(arr){
  let hash = {}
  let result = []
  result = [...new Set(arr)]
  result = result.reduce((item,next)=>{
    if(typeof next === 'object'){
      hash[JSON.stringify(next)] ? '' : hash[JSON.stringify(next)] = true && item.push(next)
    }else {
      item.push(next)   
    }
    return item
  },[])
  return result
}
var arr = [{name:"cc",age:21,child:{name:"dd"}},{name:"cc",age:21,child:{name:"dd"}},{name:"cc",age:21,child:{name:"dd3d"}}]
var arr1 = deepRepeat(arr)
console.log(arr1)