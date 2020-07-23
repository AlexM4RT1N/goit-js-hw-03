"use strict";

const countProps = function(obj) {
  let totalKeys = 0;
  for (const key in obj) {
    totalKeys++;
  }
  return totalKeys;
};


console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));