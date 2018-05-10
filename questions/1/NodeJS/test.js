const assert = require('chai').assert

var solution = require("./test5");

console.log(solution.sumOfMultiples(1000));

assert.equal(solution.sumOfMultiples(1000), 233168)