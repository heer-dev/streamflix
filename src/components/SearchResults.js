import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/App.css'; 

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/MovieDetails/${id}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (!query) return;

    const fetchResults = async () => {
      const response = await fetch(`https://streamflic-backend-827287f6aade.herokuapp.com/media/search?title=${query}`);
      const data = await response.json();
      setResults(data);
    };

    fetchResults();
  }, [location.search]);

  return (
    <div>
      <header>
      <Header />
      </header>
      <div className='main'>
      <div className="movie-listing-page">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="movie-listing-card" onClick={() => handleClick(result.id)}>
              <img src={result.smallPosterPath} alt={result.name} className="movie-listing-poster" />
              <h3 className="movie-listing-title">{result.name}</h3>
            </div>
          ))
        ) : (
          <div className="search-result-not-found">Search Result not found</div>
        )}
      </div>
      </div>
    </div>
  );
};

export default SearchResults;
