//STEP 1
    function getNumberFromUser() {
    const userInput = prompt("Please enter a number")
    const number = parseFloat(userInput)

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.")
        return
    }

    const positiveNumber = Math.abs(number)
    console.log("The positive version of the number is", positiveNumber)
    }

    getNumberFromUser()

//STEP 2

    function roundUp() {
    const userInput = prompt("Please enter a number with a decimal.")
    const floatValue = parseFloat(userInput)

    if (isNaN(floatValue)) {
        console.log("Invalid input. Please enter a valid decimal.")
        return
    }

    const roundedValue = Math.ceil(floatValue)
    console.log("The rounded up value of" + userInput + "is " + roundedValue + ".")
    }

    roundUp()

//STEP 3
    function roundDown() {
    const userInput = prompt("Please enter a number with a decimal.")
    const floatValue = parseFloat(userInput)

    if (isNaN(floatValue)) {
        console.log("Invalid input. Please enter a valid decimal.")
        return
    }

    const roundedValue = Math.floor(floatValue)
    console.log("The rounded down value of" + userInput + "is ", roundedValue)
    }

    roundDown()

//STEP 4
    function findMinMax() {
    const userInput = prompt("Please enter 5 numbers separated by commas (example 1,2,3,4,5)")
    const numbersArray = userInput.split(',').map(num => parseFloat(num.trim()))

    if (numbersArray.length !== 5 || numbersArray.some(isNaN)) {
        console.log("Invalid input. Please enter 5 valid numbers separated by commas.")
        return
    }

    const maxNumb = Math.max(...numbersArray)
    const minNumb = Math.min(...numbersArray)

    console.log("The largest number is ", maxNumb)
    console.log("The smallest number is ", minNumb)
    }

    findMinMax()

//STEP 5
    function calculateSqroot() {
    const userInput = prompt("Please enter a number")
    const number = parseFloat(userInput)

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.")
        return
    }
    
    const squareRoot = Math.sqrt(number)
    console.log("The square root of", userInput, "is ", squareRoot)
    }

    calculateSqroot()

