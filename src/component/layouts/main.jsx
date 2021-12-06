import * as React from "react"
// import { Box } from "@chakra-ui/react"
// import "bootstrap/dist/css/bootstrap.css"
import { Navbar } from "../../component/navbar"
import {
  // container,
  heading,
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  containerLayout,
  nav,
  logo,
  navUlLinks,
  navButtom,
  tamLogo,
  navButtomCurriculum,
  sideLeft,
  sideRight,
} from './main.module.css'
import { useLocation } from '@reach/router';
import { Container, Box } from "@chakra-ui/react"
import NavBarLeft from "../navBarLeft"
import NavBarRight from "../navBarRight"
import { AnimatePresence, motion } from 'framer-motion'

const Layout = ({ children }) => {
  const path = useLocation()


  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }
  return (
    <Box as="main" pb={8}>
      <head>
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
        <title>Daniel Alejandro Rangel Sanchez | Developer</title>
      </head>
      <Navbar zIndex={5} path={path.pathname} />
      <Container mt={3} zIndex={1} maxW="container.md" >
        <AnimatePresence exitBeforeEnter initial={true}>
          <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
          >
            {children}
          </motion.article>
        </AnimatePresence>
      </Container>
      <NavBarLeft zIndex={2} />
      <NavBarRight zIndex={1} />
    </Box>
  )
}

export default Layout;
