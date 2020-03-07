function quickSort(arr,low,high){
  if(low >= high) return
  let i = low
  let j = high
  let tmp = arr[low]
  while(i < j){
    while(i < j && arr[j] <= tmp) j--
    if(i < j) arr[i++] = arr[j] 
    while(i < j && arr[i] >= tmp) i++
    if(i < j) arr[j--] = arr[i]
  }
  arr[i] = tmp
  quickSort(arr,low,i)
  quickSort(arr,i+1,high)
}
var arr = [123,45,46,644,55,4,4,6,23,10]
quickSort(arr,0,arr.length-1)
console.log(arr)