import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

const NoResultsFound = () => {
  return (
    <Box py="16" align="center" minH="63vh">
      <Text fontSize="4xl"> No Such Results Were Found</Text>
    </Box>
  )
}

export default NoResultsFound
