 const app = require('express')()
 const EventEmitter = require('events')

 const event = new EventEmitter();
 let count  = 0;
 event.on('countApi', ()=>{
    count++;
    console.log('Event Called '+ count + ' times')
 })

 app.get('/', (req,res)=>{
    res.send('Hello')
    event.emit('countApi')
 })

 app.listen(4040)