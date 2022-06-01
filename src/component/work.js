import React from "react"
import Tags from "./tags"
import { Container, Text } from "@chakra-ui/react"

const Work = ({ labels, children, text, props }) => {
  return (
    <Container overflowX="hidden" >
      <Text m="10px">{text}</Text>
      <Tags labels={labels} />
      {children}
    </Container>
  )
}

export default Work
