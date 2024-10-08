import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "Inception",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 9,
    dailyRentalRate: 4.0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    title: "The Dark Knight",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 4.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    title: "Superbad",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 6,
    dailyRentalRate: 2.0
  },
  // إضافة المزيد من الأفلام
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    title: "The Matrix",
    genre: { _id: "5b21ca3eeb7f6fbccd471825", name: "Drama" },
    numberInStock: 5,
    dailyRentalRate: 3.8,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471826",
    title: "Jumanji: Welcome to the Jungle",
    genre: { _id: "5b21ca3eeb7f6fbccd471826", name: "Adventure" },
    numberInStock: 6,
    dailyRentalRate: 3.2,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471827",
    title: "Mad Max: Fury Road",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 4.0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471828",
    title: "The Hangover",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 3,
    dailyRentalRate: 2.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471829",
    title: "Interstellar",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 5,
    dailyRentalRate: 4.2,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182a",
    title: "Harry Potter and the Sorcerer's Stone",
    genre: { _id: "5b21ca3eeb7f6fbccd471827", name: "Fantasy" },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182b",
    title: "The Conjuring",
    genre: { _id: "5b21ca3eeb7f6fbccd471828", name: "Horror" },
    numberInStock: 4,
    dailyRentalRate: 4.0,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182c",
    title: "Star Wars: A New Hope",
    genre: { _id: "5b21ca3eeb7f6fbccd471829", name: "Sci-Fi" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182d",
    title: "The Notebook",
    genre: { _id: "5b21ca3eeb7f6fbccd471830", name: "Romance" },
    numberInStock: 6,
    dailyRentalRate: 3.0,
    liked: true
  }
];


export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
