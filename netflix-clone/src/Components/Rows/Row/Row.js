import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchURL }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        const result = await axios.get(fetchURL);
        setMovie(result.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchmovies();
  }, [fetchURL]);

  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handlerClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (!url) {
            console.log("No trailer found for", movie.title);
            return;
          }
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log("Error fetching trailer:", err);
        });
    }
  };

  return (
    <div className="bl">
      <h1 style={{ color: "white" }}>{title}</h1>
      <div className="row">
        <ul className="row">
          {movie.map((movies) => (
            <li className="rows" key={movies.id}>
              <img
                onClick={() => handlerClick(movies)}
                src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
                alt={movies?.title}
                style={{ height: "200px", width: "95%" }}
              />
              {movies?.title || movies?.name || movies?.original_name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: "100%", height: "200px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;