import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Text, Box } from "@chakra-ui/react"
// import styled from "@emotion/styled"

/* const LogoBox = styled.span` */
/*   font-weight: bold; */
/*   font-size: 18px; */
/*   display: inline-flex; */
/*   align-items: center; */
/*   height: 50px; */
/*   line-height: 20px; */
/*   margin: 10px; */
/*   weight: "auto"; */
/*   img { */
/*     padding-right: 10px; */
/*     transition: 200ms ease; */
/*     width: "100%"; */
/*   } */

/*   &:hover img { */
/*     transform: rotate(20deg); */
/*   } */
/* ` */

// const ImageGatsby = (props) => <StaticImage {...props} />

const Logo = () => {
  return (
    <Link to="/">
      {/* <LogoBox> */}
      <Box
        fontWeight="bold"
        fontSize="18px"
        display="inline-flex"
        alignItems="center"
        height="60px"
        lineHeight="20px"
        margin="10px"
      >
        <Box
          w="auto"
          paddingRight="10px"
          transition="200ms ease"
          _hover={{ transform: "rotate(20deg)" }}

        >
          <StaticImage
            width={30}
            height={45}
            src="../images/logo.svg"
            alt="logo"
            placeholder="logo"
          />
        </Box>

        <Text
          // color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          // fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Daniel Rangel
        </Text>
      </Box>
      {/* </LogoBox> */}
    </Link>
  )
}

export default Logo
