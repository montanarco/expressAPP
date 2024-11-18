/*const function1 = () => { console.trace(); };

const function2 = () => { function1(); };

function2();*/

/*const sum = () => console.log(`the sum of 2 and 3 is: ${2+3}`);
const multiply = () => console.log(`the multiply of 2 and 3 is: ${2*3}`);

const measureTime = () =>{
    console.time("sum()");
    sum();
    console.timeEnd("sum()");
    console.log('------------------')
    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");
}

measureTime();*/

const ProgressBar = require("progress"); 
const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", { total: 20, }); 

const timer = setInterval(() => { 
    bar.tick(); 
    if (bar.complete) { 
        clearInterval(timer); 
    } 
}, 100);