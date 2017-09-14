/**
 * Write a program that prints the integers from 1 to limit (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

var fizzBuzz = (limit) => {
  var res = [];
  for (let index = 1; index < limit; index++) {
    const isFizz = index % 3 === 0;
    const isBuzz = index % 5 === 0;

    const result =
      isFizz && isBuzz
        ? 'FizzBuzz'
        : isFizz
          ? 'Fizz'
          : isBuzz
            ? 'Buzz'
            : index;
   


    res.push(result);
  }
  return res;
}

module.exports = fizzBuzz;