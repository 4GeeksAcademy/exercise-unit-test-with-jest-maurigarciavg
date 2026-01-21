const { sum, fromEuroToDollar, oneEuroIs, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('calculate the divisa change between euros 1 and dollars 1.07 ', () => {
    let dollars = fromEuroToDollar(1);
    expect(dollars).toBe(oneEuroIs.USD);
});

test('calculate the divisa change between dollar to yen ', () => {
    let yen = fromDollarToYen(1);
    expect(yen).toBeCloseTo(146.26)
});
test('calculate the divisa change between yen to pound ', () => {
    let pound = fromYenToPound(1);
    expect(pound).toBeCloseTo(0.0056)
});