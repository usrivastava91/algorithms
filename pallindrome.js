// To check if a string or any permutation of the string is a pallindrome
// example 'civic' is a pallindrome , so vicic should return true too

var pallindrome = (input) => {

    const unmatched = new Set();

    input.split('').map( char =>{
        if(unmatched.has(char))
            unmatched.delete(char);
        else 
            unmatched.add(char);
    })

    return unmatched.size <= 1;
};

module.exports = pallindrome;