import * as React from "react"
import Main from "../component/layouts/main"
import {
  Container,
  Heading,
  FormControl,
  // FormLabel,
  // FormErrorMessage,
  Input,
  // FormHelperText,
  Box,
  Textarea
} from "@chakra-ui/react"
import { useState } from "react"
// import VoxelSphere from "../component/sphere"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [presupuesto, setPresupuesto] = useState(0)
  const [project, setProject] = useState("")
  // const handleInputChange = (e) => setInput(e.target.value)

  return (
    <Main title="Contact">
      <Container w="100%" mt={8} maxW="auto">
        <Heading as="h1" variant="title-h1" whiteSpace="normal">
          Let's start an awesome project!
        </Heading>
        <Heading as="h2" mt={3} whiteSpace="normal">
          Contact Us
        </Heading>
        <Box mt={3}>Tell me everything I need to know about your project!</Box>
        <FormControl mt={2}>
          {/* <FormLabel htmlFor="name">Name</FormLabel> */}
          <Input
            id='name'
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="presupuesto"
            placeholder="Budget"
            type="number"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
          <Textarea
            id="explainProject"
            placeholder="Tell me the needs and requirements of your project."
            value={project}
            onChange={(e) => setProject(e.target.value)}
            size="sm"
          />
        </FormControl>
      </Container>
    </Main >
  )
}

export default Contact



{/* <Container> */ }
{/*   <VoxelSphere /> */ }
{/* </Container> */ }

