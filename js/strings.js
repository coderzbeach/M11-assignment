//STEP 1
    var userName = prompt("Please enter your name")
    var nameLength = userName.length
    alert("The length of your name is: " + nameLength + " characters.")

//STEP 2
    var userName = prompt("Please enter your name")
    if (userName) {
    var index = prompt("Please enter a number to find the character at that position in your name")
    index = parseInt(index)
    if (!isNaN(index) && index > 0 && index <= userName.length) {
        var character = userName.charAt(index - 1)
        alert("The character at position " + index + " in your name is: " + character)
    } else {
        alert("Invalid input. Please enter a number between 1 and " + userName.length + ".")
    }
    } else {
    alert("Invalid input. Please enter a valid name.")
    }

//STEP 3
    var firstName = prompt("Please enter your first name")
    var lastName = prompt("Please enter your last name")
    var fullName = firstName + " " + lastName
    alert("Your name is " + fullName)

//STEP 4
    var phrase = "The quick brown fox jumps over the lazy dog"
    var index = phrase.indexOf("fox")
    alert("The index of the word 'fox' is " + index)

//STEP 5
    var text = "The quick brown fox jumps over the lazy fox"
    var lastIndex = text.lastIndexOf("fox")
    alert("The last index of the word 'fox' is " + lastIndex)

//STEP 6
    var text = "The quick brown fox jumped over the lazy dog"
    var userName = prompt("Please enter your full name")
    var newText = text.replace("the lazy dog", userName)
    alert("The modified text is " + newText)

//STEP 7
    var text = "The quick brown fox jumps over the lazy dog"
    var searchWord = prompt("Please enter a word to search for:")
    var wordIndex = text.indexOf(searchWord)
    if (wordIndex !== -1) {
    alert("The word '" + searchWord + "' was found at index: " + wordIndex)
    } else {
    alert("The word '" + searchWord + "' was not found in the text.")
    }

//STEP 8
    var old_string = "The quick brown fox jumps over the lazy dog"
    var new_string = old_string.slice(35)
    var upper_new_string = new_string.toUpperCase()
    alert(upper_new_string)

//STEP 9
    var text = "    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
    var trimmedText = text.trim()
    var lowerCaseText = trimmedText.toLowerCase()
    alert(lowerCaseText)

//STEP 10
    var text = "the quick brown fox jumps over the lazy dog"
    var capitalizedText = text.charAt(0).toUpperCase() + text.slice(1)
    alert(capitalizedText);