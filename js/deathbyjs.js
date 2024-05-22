//STEP 1
    function sortAlphabetically() {
    const userInput = prompt("Please enter a word ")
    const sortedString = userInput.split('').sort().join('')
    return sortedString
    }
    console.log("The sorted string is", result)

//STEP 2
    function capitalizeFirstLet(str) {
    const userInput = prompt("Please enter a sentence")
    const words = userInput.split(' ')
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    })

    const capitString = capitalizedWords.join(' ')
    return capitString
    }
    const result = capitalizeFirstLet()
    console.log("The capitalized version is", result)

    //STEP 3

    function countVowels(str) {
        const userInput = prompt("Please enter a sentence")
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let vowelCount = 0
    const lowerCaseString = str.toLowerCase()

    for (let char of lowerCaseString) {
        if (vowels.includes(char)) {
            vowelCount++
        }
    }

    return vowelCount
    }
    console.log("The number of vowels in the string is ", numberOfVowels)

//STEP 4
function genRandomString() {
    const length = parseInt(prompt("Please enter the number of characters for the random string "))
    
    if (isNaN(length) || length <= 0) {
        console.log("Invalid input. Please enter a valid positive number.")
        return
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomString = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        randomString += characters[randomIndex]
    }

    return randomString
    }
    console.log("The random string is ", randomString);

//STEP 5
    function LongestCountryName(countryNames) {
    let longestName = ''
    for (let i = 0; i < countryNames.length; i++) {
        const currentName = countryNames[i]
        if (currentName.length > longestName.length) {
            longestName = currentName
        }
    }
    return longestName
    }
    console.log("The longest country name is ", longestCountryName)