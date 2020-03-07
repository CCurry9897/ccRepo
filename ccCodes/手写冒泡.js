function maopao(arr){
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j < arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){//从小到大
        let cc 
        cc = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = cc
      }
    }
  }
}
let arr = [5,3,2,1,4,89,6,2,33,5,1,48,51]
maopao(arr)
console.log(arr)