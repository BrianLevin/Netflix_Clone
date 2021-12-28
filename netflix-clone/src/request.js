const API_KEY= "b307bce2eeedb77685311913f9acbc43";

// api requests
const requests = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en_US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&width_genres35`,
fetchNHorrorMovies: `/discover/tv?api_key=${API_KEY}&width_genres=27`,
fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&width_genres=10749`,
fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&width_genres=99`,

}

export default requests;