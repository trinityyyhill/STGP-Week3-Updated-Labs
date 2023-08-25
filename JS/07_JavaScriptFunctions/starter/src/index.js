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
        for (let movie of movies) {
            if (movie.title === movieTitle) {
                return movie;
            }
            console.log(movie);
        }
        console.log("Any text, any text at all!");
        return `Movie not found`;
    }    
}
let myMovie = returnMovie("Avengers: Infinity War");
console.log(myMovie);
console.log(`${myMovie.title} is a film directed by ${myMovie.director} released in ${myMovie.year}`);
let myOtherMovie = returnMovie("Thor: Ragnorok");
console.log(myOtherMovie);
function myMovieDetails(anyMovie) {
    if (typeof (anyMovie) === 'object') {
        return `${anyMovie.title} is a film directed by ${anyMovie.director} released in ${anyMovie.year}`;
    } else {
        return anyMovie;
    }
}

console.log(myMovieDetails(myOtherMovie));

console.log(myMovieDetails(returnMovie("Jaws")));