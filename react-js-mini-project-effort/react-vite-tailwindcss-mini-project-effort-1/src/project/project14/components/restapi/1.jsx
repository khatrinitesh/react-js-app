import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RestApi() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_q1bxjk2f');
            setMovies(response.data);
            console.log(setMovies(response.data.results))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    },[]);

  return (
    <div>
      <h1>IMDb Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}
