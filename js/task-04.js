"use strict";

const countTotalSalary = function(employees) {
  let totalSalary = 0;
  for (const value of Object.values(employees)) totalSalary += value;
  return totalSalary;
};


console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);
