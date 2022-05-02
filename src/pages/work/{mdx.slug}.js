import * as React from 'react'
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Image, Icon, useColorModeValue, Box, Heading, Link } from "@chakra-ui/react"
import Main from "../../component/layouts/main"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ChevronRightIcon } from "@chakra-ui/icons"

// import { GridItemStyle } from "../../component/grid-item"

const Works = ({ data, ...props }) => {
  const color = useColorModeValue("yellow.600", "teal.900")
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Main title={data.mdx.frontmatter.title}>
      {/* <GridItemStyle /> */}
      <Container
      >

        <Box as="div" mb={9} >
          <Image
            as={GatsbyImage}
            image={image}
            borderRadius={10}
            _hover={{
              boxShadow: "0 0 0"
            }}
            color={color}
            borderWidth="2px"
            borderColor="black"
            borderStyle="solid"
            boxShadow="-16px 16px 5px"
            alt={data.mdx.frontmatter.hero_image_alt}
          />
        </Box>
        <Box m={2} mt={10}>
          <Heading fontSize={25}>
            <Link as={GatsbyLink} to="/work" >
              Work
            </Link>
            <Icon as={ChevronRightIcon} />
            {data.mdx.frontmatter.title}
          </Heading>
        </Box>
        <Box
          mt={5}
          as={MDXRenderer}>
          {data.mdx.body}
        </Box>
      </Container>
    </Main>
  )
}
export const query = graphql`
        query MyQuery($id: String) {
          mdx(id: {eq: $id}) {
          frontmatter {
          hero_image_alt
        title
        hero_image {
          childImageSharp {
          gatsbyImageData
        }
        }
      }
        body
    }
  }
        `


export default Works 
