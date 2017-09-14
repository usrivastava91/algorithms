const sortMovies = require('./sort-array');
const test = require('tape');

test('testing sort-array', (assert) => {

const input = [
    {
        name: "The Shawshank Redemtion",
        year: 1994
    },
    {
        name: "The Godfather",
        year: 1972
    },
    {
        name: "The Godfather: Part II",
        year: 1974
    },
    {
        name: "The Dark Knight",
        year: 2008
    }
]
    var result = [
        'The Godfather',
        'The Godfather: Part II',
        'The Shawshank Redemtion',
        'The Dark Knight'
  ]

  assert.deepEquals(sortMovies(input),result, 'Movies sorted correctly');
  assert.end();
})