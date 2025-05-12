const API_KEY = "70c58b2b";
const BASE_URL = "https://www.omdbapi.com/";

// OMDb tidak ada endpoint "popular", jadi boleh buat carian default seperti "Avengers"
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=Avengers`);
  const data = await response.json();
  return data.Search; // ← OMDb guna .Search untuk list
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.Search; // ← masih gunakan .Search
};
