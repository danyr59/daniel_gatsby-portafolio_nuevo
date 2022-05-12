import React from "react"
import Tags from "./tags"
import { Container, Text } from "@chakra-ui/react"

const Work = ({ labels, children, text }) => {
  return (
    <Container >
      <Text>{text}</Text>
      <Tags labels={labels} />
      {children}
    </Container>
  )
}

export default Work
