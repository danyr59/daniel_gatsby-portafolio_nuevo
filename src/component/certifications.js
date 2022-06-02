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
        {/* <StaticImage width={56} src="https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1589990867649?e=1647475200&v=beta&t=JNDcOStsdmisTC5kgoBrMHLzQfKWu-86qs3ZgiMavFk" alt="Logo Freecodecamp" /> */}
      </Box>
      <StatGroup pl={9}>
        <Stat>
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
