import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: "discover/movie",
  params: {
    api_key: "3d1d44f45c31beb4fa420771967796c4",
    with_genres: "27",
    language: "it",
  },
  movies: [],
});
