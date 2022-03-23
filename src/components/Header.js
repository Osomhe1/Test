import React from 'react';
import { Box,Flex } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
      w='100%'
      backgroundColor='#292929'
      pt={5}
      pl={10}
      h={{ base: '67px', sm: '67px', md: '120px' }}
      as='nav'
    >
      <Flex
        border='1px solid #FFFFFF'
        color='#fff'
        boxSizing='border-box'
        height='60px'
        width='130px'
        top={20}
        pt={3}
        alignItems='center'
        justifyContent={['center', 'center', 'center', 'flex-start']}
        maxW='1440px'
        p={15}
      >
        MyTestApp
      </Flex>
    </Box>
  )
}
