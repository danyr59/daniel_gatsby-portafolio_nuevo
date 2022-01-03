import React from "react"
import { Box, LinkBox, LinkOverlay, Text, Image } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Global } from "@emotion/react"
import { Link } from "gatsby"

export const GridItem = ({ thumbnail, title, children, href, alt }) => {

  const image = getImage(thumbnail)
  return (
    <Box w="100%">
      <LinkBox cursor="pointer">
        <Image
          as={GatsbyImage}
          image={image}
          alt={alt}
          className="grid-item-thumbnail"
        />
        <LinkOverlay as={Link} to={href} mt={2}><Text>{title}</Text></LinkOverlay>
        <Text fontSize={14}>
          {children}
        </Text>

      </LinkBox>
      <GridItemStyle />
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 13px;
      }
      
    `}
  />
)

