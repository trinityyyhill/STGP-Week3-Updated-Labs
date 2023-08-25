const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

function findMovie(movieTitle) {
    for (var movie of movies) {
      if (movie.title === movieTitle) {
        console.log(`Movie Title: ${movie.title}, Year: ${movie.year}`);
      }
      console.log("Value of movie:", movie);
    }
  }
  
findMovie("Star Wars");
let movie = "Thor: Ragnorok";
console.log(movie);
findMovie(movie);
function returnMovie(movieTitle) {
    {
        // Instruction 2-a
        for (let movie of movies) {
            // Instruction 2-a-i
            if (movie.title === movieTitle) {
                // Instruction 2-a-ii
                return movie;
            }
            // Instruction 2-a-iii
            console.log(movie);
        }
        // Instruction 2b
        console.log("Any text, any text at all!");
        // Instruction 8 - comment out line above and add line below
        return `Movie not found`;
    }    
}

// Instruction 3
let myMovie = returnMovie("Avengers: Infinity War");
// Instruction 4
console.log(myMovie);
// Instruction 5
console.log(`${myMovie.title} is a film directed by ${myMovie.director} released in ${myMovie.year}`);

// Instruction 6
let myOtherMovie = returnMovie("Thor: Ragnorok");
// Instruction 7
console.log(myOtherMovie);

// Instruction 10
function myMovieDetails(anyMovie) {
    // Instruction 11
    if (typeof (anyMovie) === 'object') {
        return `${anyMovie.title} is a film directed by ${anyMovie.director} released in ${anyMovie.year}`;
    } else {
        return anyMovie;
    }
}

// Instruction 12
console.log(myMovieDetails(myOtherMovie));

// Instruction 14 - a function as an argument to another function
console.log(myMovieDetails(returnMovie("Jaws")));