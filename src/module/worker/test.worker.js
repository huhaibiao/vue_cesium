self.addEventListener('message', (event) => {
  console.log(event);
    console.log('worker has got')
    let a = 1,b=2,c;
    function add(params) {
      c =a + b
      // console.log(c);
    }
    add();
    let postArr =['worker完成',c]
    self.postMessage(postArr)
    /**数据处理*/
    self.close();
  })