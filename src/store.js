import { reactive } from "vue";

export const store = reactive({
  ArrMovies: [],
  ArrTvSeries: [],
  SearchGenres: "",
  ArrGenres: [],
  SearchBar: "",
  InputError: false,
});
