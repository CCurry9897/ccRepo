var len
function build(arr) {//建立大根堆
  len = arr.length
  for(var i = Math.floor(len/2);i >= 0;i--){
    justify(arr,i)//堆调整
  }
}
function change(arr,a,b){
  var tmp
  tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}
function justify(arr,i){
  var left = 2 * i + 1
  var right = 2 * i + 2
  var max  = i
  if(left < len && arr[left] >arr[max]){
    max = left
  }
  if(right < len && arr[right] > arr[max]){
    max = right
  }
  if(max !== i){
    change(arr,i,max)
    justify(arr,max)
  }
}
function heapSort(arr) {
  build(arr);
  for (var i = arr.length-1; i > 0; i--) {
      change(arr, 0, i);
      console.log(arr,i)
      len--;
      justify(arr, 0);
  }
}
var arr = [123,45,46,644,55,4,4,6,23,10]
heapSort(arr)
console.log(arr)