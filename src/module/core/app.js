import test from "../worker/test.worker.js";

 
export class Worker{
    constructor(){
        let myWorker = new test();
        let o = {
            name:'hhh',
            age:'23',
            test1
        }
        o.test1();
        function test1(params) {
            console.log(2323);
        }
        JSON.stringify(test1);
        console.log(JSON.stringify(o));
        myWorker.postMessage('dfdf'); // 发送
        myWorker.onmessage = (e)=> {
            console.log(e.data);
          }
    }
    
}