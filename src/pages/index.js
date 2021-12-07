import * as React from "react"
import Layout from '../component/layouts/main'
import { Container, Box, useColorModeValue as ColorModeValue } from "@chakra-ui/react"


const pageIndex = () => {
  return (
    <Layout title="Homepage">
      <Container>
        <Box
          p={3}
          borderRadius="lg"
          bg={ColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          I&apos;m full Stack developer, based in Merida - Venezuela
        </Box>

      </Container>
    </Layout>
  )
}

export default pageIndex; 
