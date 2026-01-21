const sum = (a, b) => {
    return a + b
};

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromEuroToDollar(euros) {
    let dollar = euros * oneEuroIs.USD;
    return dollar
}

function fromDollarToYen(dollar) {
    let euros = dollar / oneEuroIs.USD;
    let yen = euros * oneEuroIs.JPY;
    return yen;
}
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return Number(pounds.toFixed(4));
}
console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

module.exports = { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound };