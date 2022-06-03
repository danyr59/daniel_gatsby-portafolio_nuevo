import * as React from "react"
import { motion } from 'framer-motion'
import Helmet from "react-helmet"
// import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Helmet>
          <title>{title} - Daniel Alejandro Rangel Sanchez</title>
          {/* <meta name="twitter:title" content={title} /> */}
          {/* <meta property="og:title" content={title} /> */}
        </Helmet>
      )}
      {children}

      {/* <GridItemStyle /> */}
    </>
  </motion.article>
)

export default Layout
