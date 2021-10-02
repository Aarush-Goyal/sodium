import React from 'react'
import { useColorModeValue, Flex, Box, Heading, Divider, Spacer, Text, Image } from '@chakra-ui/react'


const ChatHeader = () => {
  return (
    <Flex w="100%" mt="2" flexDir="column" h="fit-content" p="6" borderWidth="thin" borderColor={useColorModeValue('gray.300', 'whiteAlpha.300')} rounded="md" >

      <Flex mb="4">

        <Image src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" objectFit="contain" w="10" />

        <Box ml="4">
          <Heading fontSize="2xl" >Facebook</Heading>

          <Text color={useColorModeValue('gray.600', 'whiteAlpha.600')} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, porro!</Text>
        </Box>
      </Flex>
      <Divider />
      <Flex align="center" mt="4">
        <Heading fontSize="lg" color={useColorModeValue('gray.700', 'whiteAlpha.800')}>Lorem ipsum dolor sit amet consectetur adipisicing.</Heading> <Spacer />
        <Text color="green.500" >$ 113K - 120k</Text>
      </Flex>

    </Flex>

  )
}

export default ChatHeader
