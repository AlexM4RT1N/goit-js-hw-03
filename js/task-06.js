"use strict";

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  for (const object of allProdcuts) {
    if (object.name === productName) return (object.price * object.quantity);
  }
};


console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));