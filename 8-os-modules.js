const os = require('os')
const user = os.userInfo()
console.log(`The uptime of os is ${os.uptime()}in seconds`)
console.log(user)

const currentOs = {
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
    totalMem:os.totalmem()
}
console.log(currentOs)