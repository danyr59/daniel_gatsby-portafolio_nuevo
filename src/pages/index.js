import React from "react"
import Layout from '../component/layouts/main'
import { Center, Text, Heading, Container, Box, useColorModeValue as ColorModeValue, chakra, Button, } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../component/section"
import Paragraph from "../component/paragraph"
import { BioSection, BioYear } from "../component/bio.js"
import { Link } from "gatsby"

const Image = () => {
  return (
    <div>
      <StaticImage
        src="../images/self.jpeg"
        alt="Profile image"
      />
    </div>
  )
}
const ImageGatsby = chakra(Image)

const pageIndex = () => {
  return (
    <Layout title="Homepage">
      <Container w="100%" mt={8} maxW="auto">
        <Box mt={2} mb={2}>
          <Text >Hi my name is</Text>
          <Heading as="h1" mt={2} fontSize={{ base: "30px", md: "40px", lg: "80px" }} fontWeight="1000" fontFamily="'JetBrains Mono'">
            Daniel Alejandro Rangel Sanchez
          </Heading>
        </Box>

        <Box
          p={3}
          m={4}
          mt={14}
          borderRadius="lg"
          bg={ColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          <Center>
            I&apos;m full Stack developer based in Venezuela
          </Center>
        </Box>

        <Box mt={14}
          display={{ md: 'flex' }}>
          <Box m={5} flexGrow={1} >
            {/* <Heading as="h2" variant="page-title"> */}
            {/*   Daniel Rangel */}
            {/* </Heading> */}
            <chakra.p>Digital Craftsman (  Developer / Student )</chakra.p>
            <chakra.p>I'm a systems engineering major, based in Merida, VE, specializing in creating (and occasionally designing) exceptional websites, apps, and everything in between.</chakra.p>
          </Box>

          <Center flexShrink={0} >
            <Box
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
              maxWidth="200px"
            >
              <StaticImage
                style={{ borderRadius: "50%" }}
                className=""
                width={150}
                // height={300}
                layout="fixed"
                src="../images/self.jpeg"
                alt="Profile image"
              />
            </Box>
          </Center>

        </Box>

        <Section mt={20} delay={0.5}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Daniel is a 4th semester student at the University of the Andes located in Merida, Venezuela. I work as a freelance, at the moment I like to create my own projects, in order to obtain more experience in the field, I have more than a year working with both React technologies on the client side, as well as with backend technologies such as nodejs, express .js and mongojs. In order to meet the needs of the full-stack market.
          </Paragraph>
          <Center>
            <Link to="/work">
              <Button
                size="lg"
                variant="outline"
                m={6}>
                View my Work
              </Button>
            </Link>
          </Center>
        </Section>

        <Section mt={20} delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>
              2000
            </BioYear>
            Born in Merida, Venezuela
          </BioSection>
          <BioSection>
            <BioYear>
              2019
            </BioYear>
            started at the Universidad de los Andes (currently in progress), currently pursuing a degree in systems engineering.
          </BioSection>
          <BioSection>
            <BioYear>
              2020 to present
            </BioYear>
            Working on my own projects and learning every day, being self-taught
          </BioSection>

        </Section>

      </Container>
    </Layout >
  )
}

export default pageIndex;

            // {/* <div> */}
            // {/*   <p>Hi there! I am Daniel.</p> */}
            // {/*   <p>I enjoy creating things that live on the internet, be it websites, apps, or anything else. My goal is always to create products that provide pixel perfect performance experiences.</p> */}
            // {/*   <p>autodidact.</p> */}
            // {/*   <p>Here are a few technologies I've been working with recently:</p> */}
            // {/* </div> */}
            // {/* <ul > */}
            // {/*   <li>HTML &amp; CSS</li> */}
            // {/*   <li>C &amp; C++</li> */}
            // {/*   <li>Qt</li> */}
            // {/*   <li>git</li> */}
            // {/*   <li>Unix</li> */}
            // {/*   <li>CMake</li> */}
            // {/* </ul> */}

