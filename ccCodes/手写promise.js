const PENDING = "pending"
const RESOLVED = "resolved"
const REJECT = "reject"

class ccPromise{
  constructor(fn){
    this.state = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolvedCallBacks = []
    this.rejectCallBacks = []
    
    let resolve = value=>{
      if(this.state === PENDING){
        this.state = RESOLVED
        this.value = value
        this.resolvedCallBacks.forEach(cb=>cb())
      }
    }
    let reject = value=>{
      if(this.state === PENDING){
        this.state = REJECT
        this.value = value
        this.rejectCallBacks.forEach(cb=>cb())
      }
    }
    try{
      fn(resolve,reject)
    }catch(e){
      reject(e)
    }
  }
  then(onFulfiled,onRejected){
    onFulfiled = typeof onFulfiled === "function" ? onFulfiled:v=>v()
    onRejected = typeof onRejected === "function" ? onRejected : e=>{throw e}
    // 解决链式调用,返回一个新的promise
    let promise2 = new ccPromise((resolve,reject)=>{
      if(this.state === RESOLVED){
        setTimeout(()=>{
          try{
            let x = onFulfiled(this.value)
            resolvePromise(promise2,x,resolve,reject)
          }catch(e){
            reject(e)
          }
          
        })
      }
    })
  }
}