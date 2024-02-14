const products = [
    {name: "Laptop", price: 120000},
    {name: "Mobile", price: 70000},
    {name: "Laptop Bag", price: 20000},
    {name: "Watch", price: 20000},
    {name: "Mobile Charger", price: 1500},
];

const lowestPriceProduct = products.reduce((prev, current) => prev.price < current.price ? prev : current);
const highestPriceProduct = products.reduce((prev, current) => prev.price > current.price ? prev : current);

console.log("Lowest price product: ", lowestPriceProduct.name, " - ", lowestPriceProduct.price);
console.log("Highest price product: ", highestPriceProduct.name, " - ", highestPriceProduct.price);