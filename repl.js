const repl = require("repl");

const local = repl.start("NODE console:");

local.on('exit',()=>{
    console.log("exiting REPL");
    process.exit();
})