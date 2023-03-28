const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

//<--takes a function, which uses each element as the parameter for that function-->
//<--the same .forEach could be written like:-->
// prices.forEach(function(price) {
//     console.log(price);
// });
prices.forEach(price => console.log(price));

//<--.map -->
const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    console.log(total);
    return total;
})

console.log(prices);
console.log(pricesAfterTax);