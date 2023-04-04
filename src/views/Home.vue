<template>
  <div class="test">
    <a-input-search
      v-model="value"
      placeholder="请输入内容"
      enter-button="发送"
      class="input"
      @search="websocketsend"
    />
    <div class="list-wrapper">
      <div v-for="(item, index) in list" :key="index" style="padding: 2px 10px; border-bottom: 1px dashed #aaa;">
        <p>{{item.time}}</p>
        <p style="font-size: 18px;">{{item.message}}</p>
      </div>
    </div>
  </div>
</template>
 
<script>
  export default {
    name : 'test',
    data() {
      return {
        websock: null,
        value: '',
        list: []
      }
    },
    created() {
      this.initWebSocket();
    },
    destroyed() {
      this.websock.close() //离开路由之后断开websocket连接
    },
    methods: {
      initWebSocket(){ //初始化weosocket
        const wsuri = "ws://124.221.178.3:8099";
        // const wsuri = "ws://192.168.1.247:8099";
        this.websock = new WebSocket(wsuri);
        this.websock.onmessage = this.websocketonmessage;
        // this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      // websocketonopen(){ //连接建立之后执行send方法发送数据
      //   let actions = {"test":"12345"};
      //   this.websocketsend(JSON.stringify(actions));
      // },
      websocketonerror(){//连接建立失败重连
        this.initWebSocket();
      },
      websocketonmessage(e){ //数据接收
        console.log(e)
        if(e) {
          this.value = '';
        }
        let redata = JSON.parse(e.data);
        if(redata.message.type && redata.message.type === 'Buffer') {
          redata.message = Buffer.from(redata.message.data).toString('utf-8')
        }
        this.list.push(redata);
        setTimeout(() => {
          const dom = document.getElementsByClassName('list-wrapper')[0]
          dom.scrollTop = dom.scrollHeight;
        }, 50)
      },
      websocketsend(Data){//数据发送
        this.websock.send(Data);
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
      },
    },
  }
</script>
<style lang='scss'>
 .test {
   width: 400px;
   margin: 20px auto;
   box-shadow: 0 3px 8px rgba(0,0,0,.6);
   .input {
     width: 400px;
     position: fixed;
     bottom: 20px;
   }
  .list-wrapper {
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
 }
</style>