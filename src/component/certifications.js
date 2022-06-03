import React from "react"
import {
  Box,
  StatGroup,
  Stat,
  Heading,
  StatLabel,
  chakra,
  Divider,
} from "@chakra-ui/react"

import { StaticImage } from "gatsby-plugin-image"

const Certifications = ({ title, caducidad, credential }) => {
  return (
    <>
      <Box pl={3} >
        <StaticImage width={100} src="../images/logofreecodecamp.png" />
      </Box>
      <StatGroup pl={9} w="100%">
        <Stat w="100%">
          <Heading as="h4" size="md">{title}</Heading>
          <StatLabel>FreeCodeCamp</StatLabel>
          <StatLabel>{`Issued: ${caducidad} - No expiration date`}</StatLabel>
          <chakra.a opacity={0.8} fontSize="sm" alt="link" href={`https://www.freecodecamp.org/certification/danyr58/${title.toLowerCase().replace(/ /g, "-")}`}>
            see credential
          </chakra.a>
          <Divider mt={3} orientation="horizontal" />

        </Stat>
      </StatGroup>

    </>
  )
}

export default Certifications
