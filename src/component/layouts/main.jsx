import * as React from "react"
// import { Box } from "@chakra-ui/react"
// import "bootstrap/dist/css/bootstrap.css"
import { Navbar } from "../../component/navbar"
import { useLocation } from '@reach/router';
import { Container, Box } from "@chakra-ui/react"
import NavBarLeft from "../navBarLeft"
import NavBarRight from "../navBarRight"
import Layout from "./Article"
import Helmet from "react-helmet"
// import "@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap');"
// import Fonts from "../../@chakra-ui/gatsby-plugin/fonts.js"

const Main = ({ children, title }) => {
  const path = useLocation()

  return (
    <Box as="main" pb={8} >
      {/* <Fonts /> */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daniel's homepage" />
        <meta name="author" content="Daniel Alejandro Rangel Sanchez" />
        <meta name="author" content="danyr59" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="twitter:site" content="@craftzdog" /> */}
        {/* <meta name="twitter:creator" content="@craftzdog" /> */}
        {/* <meta name="twitter:image" content="/card.png" /> */}
        {/* <meta property="og:site_name" content="Takuya Matsuyama's Homepage" /> */}
        {/* <meta property="og:type" content="website" /> */}
        {/* <meta property="og:image" content="/card.png" /> */}
      </Helmet>
      <Navbar zIndex={5} path={path.pathname} />
      <Container mt={3} zIndex={1} p={{ base: 2, xs: 4, md: 6, lg: 8 }} maxW={{ md: "container.md", lg: "57em" }}>
        <Layout title={title}>
          {children}
        </Layout>
      </Container>
      <NavBarLeft zIndex={2} />
      <NavBarRight zIndex={1} />
    </Box >
  )
}

export default Main;
