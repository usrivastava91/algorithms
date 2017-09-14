//sort an array of objects in ascending order


var sortMovies = (input) => {
     input.sort((a,b) => a.year - b.year);
     return input.map((movie) => movie.name );
};

module.exports = sortMovies;