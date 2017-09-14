const anagram = require('./anagram.js');
const test = require('tape');

test('Testing to check if strings are Anagrams',(assert) => {
    var input1 = 'earth';
    var input2 = 'heart';
    assert.ok(anagram(input1,input2),'The strings are anagrams')
    assert.end();
})