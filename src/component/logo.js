import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 50px;
  line-height: 20px;
  margin: 10px;

  img {
    padding-right: 10px;
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <StaticImage
          width={35}
          height={50}
          src="../images/logo.svg"
          alt="logo"
          placeholder="logo"
        />

        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c"'
          fontWeight="bold"
          ml={3}
        >
          Daniel Rangel
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
