let nums = []  //stores input valus
let operation = ''
let result = 0 //have a function inisde equal button that look to see if result zero


//function for the displaying the entered numbers
const displayNum = (num) => {
    let screen = document.querySelector('.displayScreen')
    screen.append(num)
    let current = document.querySelector('.displayScreen')
}

//function to display the operation
const operator = (oper) => {
    let screen = document.querySelector('.displayScreen')
    // nums.push(parseFloat(screen.innerHTML)) can't work here will cause issue if use back button

    //This limites the operation to one
    if (screen.innerHTML.indexOf('+') === -1 && screen.innerHTML.indexOf('-') === -1 && screen.innerHTML.indexOf('*') === -1 && screen.innerHTML.indexOf('/') === -1) {
        screen.append(oper)
        operation = oper
    }

    //This condition allows user to take the result and calculate with another number
    if (screen.innerHTML.indexOf('=') === screen.innerHTML.length-1) {
        screen.innerHTML = ''
        screen.append(result+oper) //after clearing screen add the saved result with new operation
        result = 0 //no resets old result, once equal function is call will calculate new result
        nums =  [] // making sure no old inputs exist
        operation = oper
    }
    //Reset result display screen
    let resultDisplay = document.querySelector('.displayResult')
    resultDisplay.innerHTML = ''
    // console.log(nums)

}

const equals = (equal) => {
    let resultDisplay = document.querySelector('.displayResult')
    // resultDisplay.innerHTML = ''
    let screen = document.querySelector('.displayScreen')
    if(screen.innerHTML.indexOf('=') === -1 ) {  //this limits the equal sign that can be entered
        screen.append(equal)
        let display = screen.innerHTML
        nums.push(parseFloat(display.substring(0,display.indexOf(operation)))) //extracting the number values from the string on display
        nums.push(parseFloat(display.substring(display.indexOf(operation)+1,display.length-1))) //using parseFloat to account for decimal numbers too
        // console.log(nums)
        if (operation === "+") {   //testing which math operation to perform
            result = nums[0] + nums[1]
        } else if (operation === "-") {
            result = nums[0] - nums[1]
        } else if (operation === "*") {
            result = nums[0] * nums[1]
        } else {
            result = nums[0] / nums[1]
        }
    
        resultDisplay.append(result)
    }
}

//function to clear everything and start fresh
const clearAll = () => {
    let screen = document.querySelector('.displayScreen')
    screen.innerHTML = ""
    let resultDisplay = document.querySelector('.displayResult')
    resultDisplay.innerHTML = ""
    nums = []
    result = 0
    operation = ''
}

//function to go back one
const backBut = () => {
    let screen = document.querySelector('.displayScreen')
    let display = screen.innerHTML
    screen.innerHTML = display.substring(0,display.length-1) //displays current string on display minus last character
    nums = [] //resets num array incase old values still exist
    let resultDisplay = document.querySelector('.displayResult')
    resultDisplay.innerHTML = ''
}
