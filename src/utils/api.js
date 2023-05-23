import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWU4MGU0ZWYyMzA5NGU1ZTgwMDIyYmY4MzQyMjFlOSIsInN1YiI6IjY0NDNmYjY2YTA2ZWZlMDU1MmE0YjFiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fMGH9WajpOpVE2EJXfW9C3h7npe2_bO_RZAJCO-Dvk";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default fetchDataFromApi;
