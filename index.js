const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "",
assets : {
large_image : "",
large_text : "" // 
},
buttons : [{label : "Button 1" , url : "Link 1"},{label : "Button 2",url : "Link 2"}]
}
})
})
client.login({ clientId : "" }).catch(console.error);