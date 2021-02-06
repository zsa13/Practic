"use strict";

let number0fFilms;

function start() {
	number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
		number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
// start();

//Создать объект personalMovieDB
const personalMovieDB = {
	count: number0fFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}; 


//Задать пользователю два раза по 2 вопроса



function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			  b = prompt('На сколько его оцениете?', '');
				
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			i--;
		}
		
	}
}
rememberMyFilms();

// Дать оценку его количеству просмотренных фильмов

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
// detectPersonalLevel();

// Если значение personalMovieDB.privet false, тогда вывести главный объект
function showMyDB(hidden) {
	if (!hidden) {							//Используется оператор отрицания к аргументу
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privet);

function writeYourGenres() {
	for (let i = 1; i <=3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш любимы жанр под номером ${i}?`);
		
	}
}
writeYourGenres();


