import * as React from "react"
import { graphql, } from "gatsby"
import Main from "../component/layouts/main"
import { Box, /*Container,*/ Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../component/section.js"
import { GridItem } from "../component/grid-item.js"

const Work = ({ data }) => {
  data.allMdx.nodes.map((node) => console.log(node))
  return (
    <Main title="Work">
      {/* <Container> */}
      <Heading as="h1">Work</Heading>
      <SimpleGrid mt="30px" columns={[1, 1, 2, 3]} spacing="40px">
        {data.allMdx.nodes.map((node) => (
          <Section key={node.id}>
            <GridItem thumbnail={node.frontmatter.hero_image} title={node.frontmatter.title} alt={node.frontmatter.hero_image_alt} href={node.slug}>
              {node.frontmatter.hero_image_description}
            </GridItem>
          </Section>
        ))
        }

      </SimpleGrid>
      {/* </Container> */}
    </Main>
  )
}
export default Work


export const query = graphql`

  query {
   allMdx(sort: {order: DESC, fields: frontmatter___hero_priority}) {
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
         hero_link_project_deploy
         hero_link_project_repository
         hero_tech_stack
         hero_image_description
        }
      }
    }
  }
`
