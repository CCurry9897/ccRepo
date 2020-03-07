function change(num){
  if(!num || isNaN(num)) {
    console.log("不是数字")
    return
  }
  let arr1 = ["零","一","二","三","四","五","六","七","八","九"]
  let arr2 = ["","十","百","千","万","十","百","千","亿","十"]
  let numArr = num.toString().split("")
  
  let result = ""
  for(let i = 0;i < numArr.length;i++){ // 1 2 3 4 2 1 5
    let index = numArr.length - 1 - i   // 6 5 4 3 2 1 0
    result = arr2[i] + result           // 
    let findIndex = numArr[index]       // 5 1 2 4 3 2 1
    result = arr1[findIndex] + result
    //零百 零千 变成 零 十零变成十
    result = result.replace(/零(千|百|十)/g,'零').replace(/十零/g,'十')
    // 零。。零换成零
    result = result.replace(/零+/g,'零')
    result = result.replace(/零万/g,'万').replace(/零亿/g,'亿')
    result = result.replace(/零+$/,'')
    console.log(result)
  }
}
change(1230200000)