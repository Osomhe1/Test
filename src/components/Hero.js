import React from 'react';
import { Heading, Flex } from '@chakra-ui/react'
import Rectangle from './img/Rectangle.jpg'

export default function Hero() {
  return (
    <Flex
      as='section'
      backgroundImage={Rectangle}
      backgroundSize='cover'
      backgroundRepeat='none'
      backgroundPosition='center'
      w='full'
      h={{ base: '257px', sm: '257px', md: '500px' }}
      color='white'
    >
      <Flex
        fontWeight={700}
        fontSize='72px'
        pt={10}
        height={282}
        left='77px'
        lineHeight='94px'
        color='#fff'
        letterSpacing='-0.2rem'
        px='77px'
        alignItems='center'
        justifyContent={['center', 'center', 'center', 'flex-start']}
        maxW='1440px'
        w='full'
        m='0 auto'
      >
        <Heading
          textAlign={['center', 'center', 'center', 'left']}
          fontFamily='DM Sans'
          maxW={{ base: '273px', sm: '273px', md: '490px' }}
          fontSize={{ base: '28px', sm: '28px', md: '72px' }}
          w='full'
          m={{ base: '0 auto', sm: '0 auto', md: '0 0' }}
        >
          Watch something incredible.
        </Heading>
      </Flex>
    </Flex>
  )
}
