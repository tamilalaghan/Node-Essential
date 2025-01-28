// Execution One
// console.log(process.argv)

// Execution Two
function grab(argmuments){
    let indexOfArgumentsValue = process.argv.indexOf(argmuments) +1;
    let value = process.argv[indexOfArgumentsValue];
    console.log(`Argument: ${argmuments} , Value: ${value}`)
    return value;
   
}

let configName = grab("--configName")
console.log(`Process Argv`)
console.log(`------------------------------`)
console.log(process.argv)
console.log(`------------------------------`)
console.log(`The ConfigName specified in the argument is ${configName}`)

