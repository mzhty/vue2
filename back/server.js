const moment = require ('moment')
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8089 });//设置端口

wss.on('connection', function connection(ws) {//对‘conntection’这个串进行监听，当收到这个后，执行下面的操作
  console.log('websocket已连接')
  ws.on('message', function incoming(message) {
    const time = moment().format('YYYY-MM-DD HH:mm:ss')
    console.log('received: %s',time, message)
    if(message) {
      let result = {
        time,
        message,
      }
      ws.send(JSON.stringify(result))
    }
  }); 
});