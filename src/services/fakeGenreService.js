export const genres = [ 
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "5b21ca3eeb7f6fbccd471825", name: "Drama" },
  { _id: "5b21ca3eeb7f6fbccd471826", name: "Adventure" },
  { _id: "5b21ca3eeb7f6fbccd471827", name: "Fantasy" },
  { _id: "5b21ca3eeb7f6fbccd471828", name: "Horror" },
  { _id: "5b21ca3eeb7f6fbccd471829", name: "Sci-Fi" },
  { _id: "5b21ca3eeb7f6fbccd471830", name: "Romance" }
];


export function getGenres() {
  return genres.filter(g => g);
}
