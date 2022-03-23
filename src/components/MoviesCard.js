import React from 'react';
import { Box } from '@chakra-ui/react';

export default function MoviesCard(props) {
  // const { movie } = props;

  return (
    <Box
      width={300}
      display="flex"
      gap={10}
      bgColor="#000"
      height={300}
      alignItem="flex-start"
      flexDirection="row"
      padding={10}
      borderRadius={12}
      margin="0 13px"
      color="#fff"
    >
      <Box className="card--content">
        <h3
          className="card--title"
          color="#FFFFFF"
          fontSize={24}
          top={10}
          left={10}
          fontWeight={400}
          alignItem="center"
          textAlign="center"
          margin="0 10px"
          flexGrow={1}
          width={280}
          height={280}
        >
          {/* {movie.title} */}
          Movie Title
        </h3>
      </Box>
    </Box>
  );
}
