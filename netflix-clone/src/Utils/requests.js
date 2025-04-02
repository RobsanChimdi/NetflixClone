const API_KEY=process.env.REACT_APP_API_KEY
console.log(API_KEY);
console.log("API Key:", process.env.REACT_APP_API_KEY);
const requests={
    fetchNetflixOriginal:`discover/tv?api_key=${API_KEY}&with_network=213`,
FetchTopedRateMovies: `discover/movie?api_key=${API_KEY}&language=en-US`,
FetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
FetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
FetchHorrorMovies:`discover/tv?api_key=${API_KEY}&with_genres=25`,
FetchRomanticMovies:`discover/tv?api_key=${API_KEY}&with_genres=12475`,
FetchDocumentaries: `discover/tv?api_key=${API_KEY}&with_genres=99`,
FetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page-1`
};
export default requests;