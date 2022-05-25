import * as React from 'react'
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Image, Icon, useColorModeValue, Box, Heading, Link, chakra } from "@chakra-ui/react"
import Main from "../../component/layouts/main"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Work from "../../component/work"

const Works = ({ data }) => {

  const color = useColorModeValue("yellow.600", "teal.900")
  const image = getImage(data.mdx.frontmatter.hero_image)

  const components = {
    p: function pharafe(props) {
      return <chakra.p margin="5px"
        marginBottom="20px"
        textAlign="justify"
        css={{ textIndent: "1em" }}

        {...props}

      />;
    },
    h1: function pharafe(props) {
      return <chakra.h1
        borderRadius="40px"
        fontSize="20"
        marginTop="20px"
        marginBottom="10px"
        {...props}
      />;
    },
    img: function foto(props) {
      if (data === null)
        return ""
      //separate chain ./namefile
      const nameFile = props.src.substring(2)
      let images = data.mdx.frontmatter.others.filter(image => {
        return image.childImageSharp.gatsbyImageData.images.fallback.src.includes(nameFile)
      })
      let image = getImage(...images)

      return (<Image
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
      />)

    }

  }
  return (
    <Main title={data.mdx.frontmatter.title}>
      {/* <GridItemStyle /> */}
      <Container
      >

        <Box as="div" mb={9} >
          <Link href={data.mdx.frontmatter.hero_link_project_deploy} target="_blank">
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
          </Link>
        </Box>
        <Box m={2} mt={10}>
          <Heading fontSize={25}>
            <Link as={GatsbyLink} to="/work" >
              Work
            </Link>
            <Link href={data.mdx.frontmatter.hero_link_project_deploy} target="_blank">
              <Icon as={ChevronRightIcon} />
              {data.mdx.frontmatter.title}
            </Link>
          </Heading>
        </Box>
        <Work
          labels={{
            website: { text: data.mdx.frontmatter.hero_link_project_deploy, link: data.mdx.frontmatter.hero_link_project_deploy },
            plataform: data.mdx.frontmatter.hero_tech_plataform,
            stack: data.mdx.frontmatter.hero_tech_stack,
            blogpost: { text: data.mdx.frontmatter.hero_tech_blogpost, link: data.mdx.frontmatter.hero_tech_blogpost_link },
            repository: { text: data.mdx.frontmatter.hero_link_project_repository, link: data.mdx.frontmatter.hero_link_project_repository },
          }}
          text={data.mdx.frontmatter.hero_tech_text}
        />

        <MDXProvider disableParentContext={true} components={components}>
          <Box
            id="childMdx"
            mt={5}
            as={MDXRenderer}
          >
            {data.mdx.body}
          </Box>
        </MDXProvider>
      </Container>
    </Main>
  )
}

export const query = graphql`
        query MyQuery($id: String) {
          mdx(id: {eq: $id}) {
          frontmatter {
            hero_image_alt
            hero_link_project_deploy
            hero_link_project_repository
            hero_tech_stack
            hero_tech_plataform 
            hero_tech_blogpost
            hero_tech_blogpost_link
            hero_tech_text
            title
            hero_image {
                childImageSharp {
                  gatsbyImageData
                }
            }
            others {
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
