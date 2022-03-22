import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
      w="100%"
      className="header"
      backgroundColor="#292929"
      height="100px"
      pt={5}
      pl={10}
    >
      <Box
        border="1px solid #FFFFFF"
        // position="absolute"
        color="#fff"
        boxSizing="border-box"
        height="60px"
        // left={50}
        width="130px"
        top={20}
        pt={3}
      >
        MyTestApp
      </Box>
    </Box>
  );
}
