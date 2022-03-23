import React from 'react';
import { Box, Flex } from '@chakra-ui/react'

export default function MoviesCard(props) {
  const { name, image } = props;

  return (
    <Box
      width={300}
      display='flex'
      gap={10}
      height={300}
      alignItem='flex-start'
      flexDirection='row'
      padding={10}
      borderRadius={12}
      margin='10px 13px'
      color='#fff'
    >
      <Flex
        color='#FFFFFF'
        fontSize={24}
        top={10}
        left={10}
        fontWeight={400}
        alignItem='center'
        textAlign='center'
        margin='0 10px'
        flexGrow={1}
        width={280}
        height={280}
        bgImg={image}
        bgColor='#000'
      >
        {name}
      </Flex>
    </Box>
  )
}
