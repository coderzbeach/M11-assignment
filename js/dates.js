//STEP 1
    
    var currentDate = new Date()
    var currentMonth = currentDate.getMonth()
    currentMonth++
    var daysInMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate()
    console.log("There are " + daysInMonth + "days in the current month.")

//STEP 2
    function getMonthFromDate() {
    const inputDate = prompt("Please enter a date (YYYY-MM-DD format):")
    const dateParts = inputDate.split('-')
    
    if (dateParts.length !== 3) {
        console.log("Invalid date format. Please enter a date in the YYYY-MM-DD format.")
        return
    }

    const year = parseInt(dateParts[0], 10)
    const month = parseInt(dateParts[1], 10)
    const day = parseInt(dateParts[2], 10)

    if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        console.log("Invalid date. Please enter a valid date.")
        return
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const monthName = months[month - 1]

    return monthName
    }

    const monthName = getMonthFromDate()
    if (monthName) {
    console.log("The month is ", monthName)
    }

//STEP 3
    function isWeekend(date) {
    const day = date.getDay()
    if (day === 0 || day === 6) {
        return true
    } else {
        return false
    }
    }

    function testWeekend(dateString) {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
        console.log("Invalid date format. Please enter a valid date string.")
        return;
    }

    const isWeekendResult = isWeekend(date)
    if (isWeekendResult) {
        console.log(`${date.toDateString()} is a weekend.`)
    } else {
        console.log(`${date.toDateString()} is not a weekend.`)
    }
    }

//STEP 4
    function getYesterday() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = new Date()
    const yesterdayIndex = (today.getDay() - 1 + 7) % 7
    return daysOfWeek[yesterdayIndex]
    }

    const yesterdayDayOfWeek = yesterday()
    console.log("Yesterday's day of the week was ", yesterday)

//STEP 5
    function getToday() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = new Date()
    const currentDayOfWeek = today.getDay()
    const firstLetter = daysOfWeek[currentDayOfWeek][0]
    return firstLetter;
    }

    const currentDayInitial = getToday()
    console.log("Today is ", currentDayInitial)
