import React from "react"
import { Box, Container, SimpleGrid, Badge, Text, Link } from "@chakra-ui/react"

const Tags = ({ labels }) => {
  const keys = (labels) ? Object.keys(labels) : undefined
  console.log(labels)
  return (
    <Container>
      <SimpleGrid>
        {keys ? keys.map(key => {
          return (
            ["website", "blogpost", "repository"].includes(key) ?
              labels[key].text != "" ? <Box><Text><Badge fontWeight="bold" variant="solid" colorScheme="green" mr="3">{key.toUpperCase()}</Badge><Link href={labels[key].link} target="_blank">{labels[key].text}</Link></Text></Box> : " " :
              labels[key] != "" ? <Box><Text><Badge fontWeight="bold" variant="solid" colorScheme="green" mr="3">{key.toUpperCase()}</Badge>{labels[key]}</Text></Box> : " "
          )
        })
          : undefined}
      </SimpleGrid>

    </Container>
  )
}

export default Tags
