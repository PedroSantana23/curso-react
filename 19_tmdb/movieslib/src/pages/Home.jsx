import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API; // URL base da API
const apiKey = import.meta.env.VITE_API_KEY; // Chave da API

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTopRatedMovies = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Erro: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      setTopMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Corrigindo a construção da URL
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  if (error) {
    return <div className="container">Erro: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {!loading && topMovies.length === 0 && <p>Não há filmes no momento...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;