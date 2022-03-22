import React from 'react';
import { Box } from '@chakra-ui/react';
// import Rectangle from './img/Rectangle.jpg'

export default function Hero() {
  return (
    <Box backgroundImage="url('/img/Rectangle.jpg)" h={550}>
      <Box
        width={490}
        fontWeight={700}
        fontSize="72px"
        pt={10}
        height={282}
        left="77px"
        lineHeight="94px"
        color="#fff"
        letterSpacing="-0.2rem"
      >
        <h2 mt={10}>Watch something incredible.</h2>
      </Box>
    </Box>
  );
}
