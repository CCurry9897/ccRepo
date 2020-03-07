
function defineReactive(obj,key,val){
    const dep = new Dep()
    // 2.在给每个对象定义行为的时候会给它们各实例一个dep
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function ccget(){
            dep.addSub(Dep.target)//4.将Dep.target（即当前的Watcher对象存入dep的subs中）
            console.log("get")
            return val上
        },
        set:function ccset(newVal){
            if(newVal === val) return
            console.log("get")
            dep.notify()//5.触发dep实例里的notify，通知dep里面所有依赖者watcher进行更新
        }
    })
}
function observer(obj){
    if(!obj || (typeof obj !== 'object')){
        return
    }
    Object.keys(obj).forEach((key)=>{
        defineReactive(obj,key,obj[key])
    })
}
class Vue{
    constructor(options){
        this._data = options.data;
        observer(this._data)
        new Watcher()
        // 3.当new Watcher的时候，会将Dep.target（全局变量）会指向这个Watcher对象
         /* 在这里模拟render的过程，为了触发test属性的get函数 */
         console.log('render~', this._data.test);
    }
    // 1.新建一个Vue实例，把data对象传进observer，observer会给它的每个对象定义行为defineReactive
}
class Dep{//依赖者容器
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    notify(){
        this.subs.forEach((sub)=>{sub.update()})
    }
}
class Watcher{//依赖者
    constructor(){
        Dep.target = this
    }
    update(){
        console.log("视图更新了")
    }
}
Dep.target = null
let o = new Vue({
    data: {
        test: "I am test."
    }
});

// console.log(o._data.test)
// o._data.test = "hello,world."; 