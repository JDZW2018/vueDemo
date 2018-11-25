var app=new Vue({
	el: '#app',
  data:{
  	class1: false
  }
})

//数据双向绑定
var app1=new Vue({
  el:'#app1',
  data:{
    inputMessage: '数据双向绑定'
  }
})

//按钮以及if条件测试

var app2 = new Vue({
  el: '#app2', //注意绑定好对应的div
  data: {
    seen: false,
    ok: true
  },
  methods:{
    clickMethod: function(){
      if(this.ok){
        this.ok=false;
      }else{
        this.ok=true;
      }
    }
  }
})