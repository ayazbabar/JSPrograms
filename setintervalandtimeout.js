const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const now = Date.now();
rl.question("type a word as fast as possible\n",(time)=>{
    const endtime = Date.now();
    console.log(`it took you ${(endtime - now)/1000} seconds`)
    rl.close();
})

