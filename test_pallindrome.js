const pallindrome = require('./pallindrome');
const test = require('tape');

test('Testing to check if string is pallindrome', (assert) => {
    var input = 'vicic';
    assert.ok(pallindrome(input), 'The string is a pallindrome')
})