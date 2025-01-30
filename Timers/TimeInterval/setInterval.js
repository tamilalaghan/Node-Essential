//Execute One
// const timeInterval = 500;
// console.log(`The timeInterval is set to ${timeInterval} milliseconds`);
// let currentTime = 0;

// tickingClock_msg = () => {
//     currentTime = currentTime + timeInterval;
//     console.log(`Time : ${currentTime/1000} Seconds `);
// };

// setInterval(tickingClock_msg, timeInterval);


//Execute Two
const timeInterval = 1000;
console.log(`The timeInterval is set to ${timeInterval} milliseconds`);
let currentTime = 0;

tickingClock_msg = () => {
    currentTime = currentTime + timeInterval;
    console.log(`Time : ${currentTime/1000} Seconds `);
};

const stop_clock = () => {
    clearInterval(intervalId);
    console.log("Clock Stopped");
    console.log(`cleared the interval ${intervalId}`);
}



const intervalId = setInterval(tickingClock_msg,timeInterval);
const timer = 6000;
setTimeout(stop_clock, timer);




