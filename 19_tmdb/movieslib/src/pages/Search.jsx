import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH; // URL de busca
const apiKey = import.meta.env.VITE_API_KEY; // Chave da API

import "./MovieGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    try {
      console.log("Fazendo requisição para:", url); // Log da URL
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Erro: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      console.log("Resposta da API:", data); // Log da resposta
      setMovies(data.results);
    } catch (error) {
      console.error("Erro na requisição:", error); // Log de erro
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Query recebido:", query); // Log do query
    if (!query || query.trim() === "") {
      setMovies([]);
      setLoading(false);
      return;
    }

    // Corrigindo a construção da URL
    const searchWithQueryUrl = `${searchUrl}?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    console.log("URL construída:", searchWithQueryUrl); // Log da URL construída
    getSearchedMovies(searchWithQueryUrl);
  }, [query]);

  if (error) {
    return <div className="container">Erro: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {!loading && movies.length === 0 && <p>Nenhum filme encontrado.</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;