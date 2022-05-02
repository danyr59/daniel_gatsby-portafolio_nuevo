import * as React from "react"
import Main from "../component/layouts/main"
import { Container, Heading } from "@chakra-ui/react"
// import VoxelSphere from "../component/sphere"

const Contact = () => {
  return (
    <Main title="Contact">
      <Container>
        <Heading as="h1" variant="title-h1">
          Let's start an awesome project!
        </Heading>
        <Container>
          {/* <VoxelSphere /> */}
        </Container>
      </Container>
    </Main>
  )
}

export default Contact 
