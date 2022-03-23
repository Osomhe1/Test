import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, FormControl, Input, Button } from '@chakra-ui/react'
import MoviesCard from './MoviesCard';

export default function SearchMovie() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('');



  const searchMovie = async () => {

    const api_key = '69ccb13f';

    const url = `https://www.omdbapi.com/?apikey=${api_key}&t=a`

    try {
      const res = await axios.get(url);
      console.log(res.data);
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    searchMovie();

  }, [])

  return (
    <Box mt={10} p={10} maxW='1440px' m='0 auto'>
      <Box
        px={{ base: '28px', sm: '28px', md: '77px' }}
        spacing={1}
        w='full'
      >
        <FormControl action='' className='form' onSubmit={searchMovie}>
          <Button type='submit' color='#000' p='2'>
            Search
          </Button>
          <Box
            maxW={1036}
            m='4px 0'
            border=' 1px solid #000000;'
            order={1}
            top={34}
          >
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type='text'
              name='query'
              border='2px solid'
              borderColor='brand.200'
              outline='none'
              borderRadius='none'
              w='100%'
            />
          </Box>
        </FormControl>
      </Box>

      <Box className='card-list'>
        <MoviesCard
          name={movies.Title}
          categories={movies.Genre}
          image={movies.Poster}
        />
        <MoviesCard
          name={movies.Title}
          categories={movies.Genre}
          image={movies.Poster}
        />
        <MoviesCard
          name={movies.Title}
          categories={movies.Genre}
          image={movies.Poster}
        />
        <MoviesCard
          name={movies.Title}
          categories={movies.Genre}
          image={movies.Poster}
        />
      </Box>
    </Box>
  )
}
