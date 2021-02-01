"use strict";

// Создать переменную number0fFilms

const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(number0fFilms);

//Создать объект personalMovieDB
const personalMovieDB = {
  count: number0fFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}; 


// Задать пользователю два раза по 2 вопроса
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько его оцениете?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько его оцениете?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);