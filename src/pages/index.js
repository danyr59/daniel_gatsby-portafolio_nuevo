import React from "react"
import Main from '../component/layouts/main'
import {
  Center,
  Text,
  Heading,
  Container,
  Box,
  useColorModeValue as ColorModeValue,
  chakra,
  Button,
  List,
  ListItem,
  ListIcon,
  Grid,
  GridItem,
  keyframes,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../component/section"
import Paragraph from "../component/paragraph"
import { BioSection, BioYear } from "../component/bio.js"
import { Link } from "gatsby"
import Certifications from "../component/certifications"

const typingHidden = keyframes`
  from {
    width: 0;
    visibility: visible;
  }
  to{
  visibility: visible;
  }
`

const typing = keyframes`
  from { width: 0}
`
const blink = keyframes`
  50% { border-color: transparent }
`
const endBlink = keyframes`
  to {
    border-right: 0px
  }
`


const pageIndex = () => {
  return (
    <Main title="Homepage">
      <Container w="100%" mt={8} maxW="auto">
        <Box mt={2} mb={2} width="100%">
          <Text >Hi my name is</Text>
          <Heading
            fontSize={{ base: "20px", sm: "40px", md: "60px", lg: "80px" }}
            width="100%"

            as="h1"
            mt={2}
            p={1}
            fontWeight="1000"
            fontFamily="'JetBrains Mono'"
          >
            <Text lineHeight="1.2" whiteSpace="nowrap" overflow="hidden" borderRight="4px solid" w="100%" display="inline-block" animation={`${typing} 2s steps(16) .4s , ${endBlink} 0s 2s forwards`}>Daniel Alejandro</Text>
            <Text boxSizing="border-box" lineHeight="1.2" whiteSpace="nowrap" overflow="hidden" borderRight="4px solid" w="14ch" display="block" visibility="hidden" animation={`${typingHidden} 2s steps(14) 2s forwards, ${blink} .5s infinite step-end 2s alternate`}>Rangel Sanchez</Text>
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
            About Me
          </Heading>
          <Paragraph>
            Hello! My name is Daniel and I enjoy creating things that live on the Internet. My interest in web development began in 2020 when I decided to try to learn web development on my own, in the middle of the COVID-19 pandemic, it turns out that I liked everything related to the subject, so I decided to take my first leap and learn about HTML and CSS!<br /><br />
          </Paragraph>
          <Paragraph>
            I learned quickly, being able to develop projects, where I learned a lot about React, as well as backend technologies<br /><br />
          </Paragraph>
          <Paragraph>
            Being a Systems Engineering student and in view of the fact that thanks to the pandemic, we are all at home, I decided to dive deeply into web development, since I had the basis, I knew how to program beforehand in languages like C, C ++, which I learned by The beginning of 2019 when I started my career at the university, thus knowing strong foundations in programming such as object-oriented (OPP).<br /><br />
          </Paragraph>
          <Paragraph>
            Here are some technologies that I have been working with recently:
          </Paragraph>
          <Grid mt={9} alignItems="center" gridTemplateColumns='repeat(auto-fill, minmax(250px, 1fr))' gap={2}  >
            <GridItem >
              <List >
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  JavaScript (ES6+)
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  React
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  Gatsby
                </ListItem>
              </List>
            </GridItem>

            <GridItem >
              <List >
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  Node.js
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  Express.js
                </ListItem>
              </List>
            </GridItem>

            <GridItem >
              <List >
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  MongoDB
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  Mongoose.js
                </ListItem>
              </List>
            </GridItem>
          </Grid>
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

        <Section mt={20} delay={0.5}>
          <Heading as="h3" variant="section-title">
            Certifications
          </Heading>
          <List spacing={3}>
            <ListItem display="flex">
              <Certifications title="Back End Development and APIs" caducidad="Nov 2021" />
            </ListItem>
            <ListItem display="flex">
              <Certifications title="Front End Libraries" caducidad="Jul 2021" />
            </ListItem>
            <ListItem display="flex">
              <Certifications title="JavaScript Algorithms and Data Structures" caducidad="Abr 2021" />
            </ListItem>
            <ListItem display="flex">
              <Certifications title="Responsive Web Design" caducidad="Ene 2021" />
            </ListItem>
          </List>

        </Section>




      </Container>
    </Main >
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

