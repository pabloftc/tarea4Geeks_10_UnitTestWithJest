let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}
const fromDollarToYen = (dollar) => {
    return Number(((dollar / 1.2) * oneEuroIs.JPY).toFixed(2))
}
const fromYenToPound = (yen) => {
    return Number(((yen / 127.9) * oneEuroIs.GBP).toFixed(5))
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };