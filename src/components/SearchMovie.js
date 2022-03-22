import React, { useState } from 'react';
import axios from 'axios';
import { Box, FormControl, Input, Button } from '@chakra-ui/react';
import MoviesCard from './MoviesCard';

export default function SearchMovie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('');

  const searchMovie = async e => {
    e.preventDefault(e);

    const api_key = '69ccb13f';

    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}&query=${query}`;

    try {
      const res = await axios.get(url);
      console.log(res);
      setMovies(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box mt={10} p={10}>
      <Box>
        <FormControl action="" className="form" onSubmit={searchMovie}>
          <Button type="submit" bg="none" p="2">
            Search
          </Button>
          <Box
            maxW={1036}
            m="4px 0"
            border=" 1px solid #000000;"
            order={1}
            // height={54}
            top={34}
          >
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              type="text"
              name="query"
            />
          </Box>
        </FormControl>
      </Box>
      <Box className="card-list">
        {/* {movies
          .filter(movie => movie.poster_path)
          .map(movie => ( */}

        <Box>
          <h3>Movie Name</h3>
          <MoviesCard
          // movie={movie}
          //   key={movie.id}
          />
        </Box>
        {/* ))} */}
      </Box>
    </Box>
  );
}
