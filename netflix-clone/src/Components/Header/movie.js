
// import React, { useState, useEffect } from "react";

// function Movie() {
//     const [genres, setGenres] = useState([]);

//     const getMovie = async () => {
//       await  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=cec4182a56d7904b7a36f897f80392f9")
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log(json);
//                 setGenres(json.genres);
//             })
//             .catch((error) => console.error("Error fetching genres:", error));
//     };

//     useEffect(() => {
//         getMovie();
//     }, []);

//     return (
//         <div>
//             <h2>Movie Genres</h2>
//             <ul>
//                 {genres.map((genre) => (
//                     <li style={{color:"blue"}} key={genre.id}>{genre.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Movie;
