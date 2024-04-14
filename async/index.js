// Async Behaviour 

console.log('Hello There 1');


setTimeout(()=>{
    console.log('Hello There 2');
},2000)

console.log('Hello There 3')

// How to Resolve timing Issues 

let b = 10;
let a = 10;

const waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },3000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})

console.log(a+b)