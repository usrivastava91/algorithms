const fizzBuzz = require('./fizzBuzz');
const test = require('tape');

test('Testing fizzBuzz', function(assert) {
    var result =  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14,'FizzBuzz'];
    assert.deepEquals(fizzBuzz(16),result, 'fizzbuzz working as expected');
    assert.end();
});
