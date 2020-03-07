function kuaipai(arr){
  let minIndex
  for(let i = 0;i<arr.length-1;i++){
    minIndex = i
    for(let j = i+1;j < arr.length;j++){
      if(arr[j]<arr[minIndex]){//从小到大
        minIndex = j
      }
    }
    let cc 
    cc = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = cc
  }
}
let arr = [5,3,2,1,4,89,6,2,33,5,1,48,51]
kuaipai(arr)
console.log(arr)