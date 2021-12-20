const readline = require('readline')
const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let num1 = Math.floor(Math.random() * 10 + 1)
let num2 = Math.floor(Math.random() * 10 + 1)
const answer = num1 + num2;
rL.question(`Чему равно ${num1} + ${num2} ?\n`, (input) => {
    if (input.trim() == answer) {
        rL.close()
    } else {
        rL.setPrompt('Incorrect , try again\n')
        rL.prompt()
        rL.on('line', (input) => {
            if (input.trim() == answer) {
                rL.close()
            }
            else {
                rL.setPrompt(`Your answer ${input} incorrect , try again\n`)
                rL.prompt()
            }
        })
    }
})
rL.on('close', () => {
    console.log('Correct');
})
const lodash = require('lodash')
console.log(lodash.max([3, 43, 2, 345, 66, 44]));