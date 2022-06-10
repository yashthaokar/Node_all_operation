// const EventEmitter= require('events')
// //const event= require('events') //------ 
// // we have to require everytime with capital letter like this we creat class.
// ---------------------------------------------------
// const EventEmitter= require('events') // we imported it

// const event= new EventEmitter() // we created new object 

// event.on('addNo',()=>{
//     console.log('addNo my name is Yash Thaokar');
// })// add on() method to it this weill liston
// event.emit('addNo') // trigger the Event.
 //---------------------------------------------------
// Try no 2

// const EventEmitter= require('events') // we imported it

// const event= new EventEmitter() // we created new object 
// let m=0
// event.on('addNo',()=>{
//     console.log(++m);
// })// add on() method to it
// event.emit('addNo') // trigger the Event.
// event.emit('addNo') 
// event.emit('addNo')

//-----------------------------------------
//try no 3

const EventEmitter= require('events') 

const event= new EventEmitter() 
let m=0
event.once('addNo',()=>{
    console.log(++m);
})// at the place of on() we take this time once() to render it only one time.now we will call ti mulitple time but its output will show only one time beacuse it render this methods only one.
event.emit('addNo') 
event.emit('addNo') 
event.emit('addNo')