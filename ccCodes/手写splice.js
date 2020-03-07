Object.prototype.ccSplice  = function(start,deleteCount,...member){
  let addMember = [...member],len = addMember.length
  let newArr = []//放新的需要替换的字符串
  let dd = []//用来放重复的
  let lin = []//临时充当结果，把它赋值给this就搞定了
  // 如果没有member要替换，直接删除
  // 如果有member，就判断数量对不对，对的话就用member放进对应位置，在拼接
    if(len !== deleteCount && len > 0){
      console.log("参数数量不一致")
      return
    }else{
      for(let i = 0 ;i < len;i++){
        newArr.push(addMember[i])
      }
   
      for(let i = start;i < start + deleteCount;i++){
        dd.push(this[i])
      }
      for(const v in this){
        // 把不被替换的放进lin数组
        if(this[v] !== dd[v-start] && typeof this[v] !== 'function'){
          lin.push(this[v])
        }else if(this[v] === dd[v-start] && len > 0){
          lin.push(newArr[v-start])
        }
      }  
      this.length = 0;
      for(const v in lin){
        // console.log(typeof lin[v],"lin")
        if(typeof lin[v] !== 'function'){
          this.push(lin[v])
        }
      }
      // console.log(this,"this")
    }
    return dd
}
let a = [1,2,3,4,5]
a.ccSplice(0,2,'a','b')
console.log(a)