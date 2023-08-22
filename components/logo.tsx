import React from 'react'
import { Image } from '@chakra-ui/core'
import { Heading, Text } from '@chakra-ui/core'

const Logo: React.FC = () => {
  return (
    <>
    <Image src="../public/BAR-10.jpg" height="30px" />
      <Heading as="h1" size="lg" color="orange.600" textTransform="uppercase">
        
        <Text display="inline" fontWeight="extrabold">
          The BARCODESTUDIO
        </Text>{' '}
    
      </Heading>
    </>
  )
}

export default Logo
