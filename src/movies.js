// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data.js")

function getAllDirectors(moviesArray) {
    return getAllDirectors.map((currentMovie) => {
        return { director: currentMovie.director};
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((currentMovie) => {
        return currentMovie.genre.includes("Drama") && currentMovie.director.includes ("Steven Spielberg")
    }).length

}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    return moviesArray.reduce((acc, currentMovie, ) => {
        return acc + currentMovie.score
    }, 0) / movies.length
}
console.log(scoresAverage(movies).toFixed(2))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const averageDrama = moviesArray.filter((currentMovie) => {
        return currentMovie.genre.includes (`Drama`);
    })
     return averageDrama.reduce((acc, currentMovie, ) => {
        return acc + currentMovie.score
    }, 0) / averageDrama.length
}
console.log(dramaMoviesScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
            arr.sort((a, b) => {
          if (a.year < b.year) {
            return -1;
          } else if (a.year > b.year) {
            return 1;
          } else {
                if (a.title < b.title) {
              return -1;
            } else if (a.title > b.title) {
              return 1;
            } else {
              return 0;
            }
          }
        });
        return arr;
      }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    function orderAlphabetically(arr) {
        const copyArr = arr.slice();
        copyArr.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        });   
        const titles = copyArr.slice(0, 20).map(movie => movie.title);
        return titles;
      }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
