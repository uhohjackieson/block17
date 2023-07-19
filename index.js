// clean up data
// will probably be using filter in this one so refresh memory of what that does
// print an array of all the drinks using object dot(or bracket) notation, functions and map method
// print array of drinks that price <= $5, make a function to return these drinks with this condition => then map it
// use the filter method to return drinks priced at even numbers
// print the sum total for all drinks combined (make an array for prices then use reduce method to add these together)
// using boolean for true, obtain the seasonal drinks then add "with imported beans" after item name, print each one

const coffeeMenu = require("./coffee_data");

// code is clean and bug-free :)
coffeeMenu.forEach((item) => {
    item.price = Number(item.price);
})

// print an array of all the drinks
const drinks = (item) => {
    return item.name;
}
const drinksArray = coffeeMenu.map(drinks);
console.log(drinksArray);

// print array of drinks that price <= $5
const underFive = (item) => {
    return item.price <= 5
};
const drinksUnderFive = coffeeMenu.filter(underFive);
console.log(drinksUnderFive);

// print array of drinks priced with even numbers
const evenPrice = (item) => {
    return item.price % 2 === 0;
}
const drinksEvenPrice = coffeeMenu.filter(evenPrice);
console.log(drinksEvenPrice);


// get sum total if you ordered 1 of every drink
const drinksCost = (item) => {
    return item.price;
}
const drinksCostArray = coffeeMenu.map(drinksCost);
const sumTotal = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalCost = drinksCostArray.reduce(sumTotal);
console.log(`The total cost is $${totalCost}.`);

// add "with imported beans" after each seasonal drink
const seasonalDrinks = (item) => {
    return item.seasonal === true;
}
const seasonalDrinksArray = coffeeMenu.filter(seasonalDrinks);
// console.log(seasonalDrinksArray);

seasonalDrinksArray.forEach((item) => {
    item.name = item.name + " with imported beans";
})
console.log(seasonalDrinksArray);



// console.table(seasonalDrinksArray);

// if typeof item === "string" then return Number(item)
