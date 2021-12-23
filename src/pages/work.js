import * as React from "react"
import { graphql, } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Main from "../component/layouts/main"
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../component/section.js"
import { GridItem } from "../component/grid-item.js"

const Work = ({ data }) => {
  return (
    <Main title="Work">
      {/* <Container> */}
      <Heading as="h1">Work</Heading>
      <SimpleGrid mt="30px" columns={[1, 1, 2, 3]} spacing="40px">
        {data.allMdx.nodes.map((node) => (
          <Section>
            <GridItem thumbnail={node.frontmatter.hero_image} title={node.frontmatter.title} alt={node.frontmatter.hero_image_alt} href={node.slug}>
              {node.frontmatter.hero_image_description}
            </GridItem>
          </Section>
        ))
        }
        <Section>
          <GridItem thumbnail="../images/self.jpeg" title="self" href="/">A made for testing</GridItem>
        </Section>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>

      </SimpleGrid>
      {/* </Container> */}
    </Main>
  )
}
export default Work


export const query = graphql`

  query {
   allMdx {
     nodes {
       id
        slug
        frontmatter {
          title
          hero_image_alt
          hero_image{
            childImageSharp {
              gatsbyImageData
            }
          }
         hero_image_description
        }
      }
    }
  }
`
