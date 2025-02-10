const timeInterval = 500;
let currentTime = 0;
const tickingClock = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    currentTime += timeInterval;
    process.stdout.write(`Timer ... ${currentTime/1000}`);
}

const intervalId = setInterval(tickingClock,timeInterval);
const timer = timeInterval*50;
setTimeout(()=>{ clearInterval(intervalId); console.log(`\nclock stopped.`)},timer)