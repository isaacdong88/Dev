import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import Movie from "./components/Movie";
import Button from "./components/Button";
import movie from "./models/moviesData";
import { useState, useEffect } from "react";

function App() {
  const apiKey = "Your API Key from OMDBAPI.com";
  const [movieDis, setMovieDis] = useState(null);
  const [genre, setGenre] = useState(null);

  const fetchMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}&plot=full`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovieDis(data);
  };

  const actionMovie = () => {
    setGenre(
      movie.map((mov) => {
        return mov.Genre.includes("Action") ? (
          <Movie
            poster={mov}
            toggle={() => {
              fetchMovie(mov.Title);
            }}
          />
        ) : null;
      })
    );
  };

  const adventureMovie = () => {
    setGenre(
      movie.map((mov) => {
        return mov.Genre.includes("Adventure") ? (
          <Movie
            poster={mov}
            toggle={() => {
              fetchMovie(mov.Title);
            }}
          />
        ) : null;
      })
    );
  };

  const disneyMovie = () => {
    setGenre(
      movie.map((mov) => {
        return mov.Genre.includes("Animation") ? (
          <Movie
            poster={mov}
            toggle={() => {
              fetchMovie(mov.Title);
            }}
          />
        ) : null;
      })
    );
  };

  const comedyMovie = () => {
    setGenre(
      movie.map((mov) => {
        return mov.Genre.includes("Comedy") ? (
          <Movie
            poster={mov}
            toggle={() => {
              fetchMovie(mov.Title);
            }}
          />
        ) : null;
      })
    );
  };

  const getMovie = () => {
    setGenre(
      movie.map((mov) => {
        return mov ? (
          <Movie
            poster={mov}
            toggle={() => {
              fetchMovie(mov.Title);
            }}
          />
        ) : null;
      })
    );
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    fetchMovie("Creed II");
  }, []);

  return (
    <div className="App">
      <div className="nav-bar">
        <div className="nav-btn">
          <Button genre={"Home"} toggle={getMovie} />
          <Button genre={"Action"} toggle={actionMovie} />
          <Button genre={"Adventure"} toggle={adventureMovie} />
          <Button genre={"Disney"} toggle={disneyMovie} />
          <Button genre={"Comedy"} toggle={comedyMovie} />
        </div>
        <div className="nav-form">
          <div>
            <Form moviesearch={fetchMovie} />
          </div>
        </div>
      </div>
      <MovieDisplay currentmovie={movieDis} />
      <div className="main-Display">{genre}</div>
    </div>
  );
}

export default App;
