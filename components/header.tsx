import React from 'react'
import { Flex, Grid, Heading } from '@chakra-ui/core'

const Header: React.FC = () => {
  return (
    <Grid
      backgroundImage="url(/header-bg2.png)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={['60vh', '60vh', '60vh', '70vh']}
      templateRows="1fr 1fr 1fr"
    >
      <Flex
        flexDirection="column"
        gridRow="3 / 3"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      >
        <Heading
          as="h3"
          // fontSize={['4xl', '5xl', '6xl', '6xl', '6xl']}
          color="white"
          bg="orange.600"
          mb="2"
          width="fit-content"
          paddingX={['4px', '12px', '12px', '16px', '24px']}
          paddingY={['4px', '4px', '12px', '12px', '16px']}
        >
          Your Space is Our Canvas
        </Heading>
        <Heading
          as="h3"
          fontSize={['lg', 'lg', '2xl', '2xl', '2xl']}
          textTransform="uppercase"
          color="orange.600"
          bg="white"
          width="fit-content"
          paddingX={['24px', '24px', '30px', '30px', '30px']}
          paddingY={['8px', '8px', '14px', '14px', '14px']}
        >
          Creating Interiors that Reflect You
        </Heading>
      </Flex>
    </Grid>
  )
}

export default Header
