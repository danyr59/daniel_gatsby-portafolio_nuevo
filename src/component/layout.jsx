import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {
  container,
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
  tamLogo

} from './layout.module.css'


const Layout = ({ children }) => {
  return (
    <div className={containerLayout}>
      <title>daniel Rangel | dev</title>
      <nav className={nav}>
        <div className={logo}>
          <div className={tamLogo}>
            <Link to="/">
              <StaticImage
                width={60}
                height={90}
                src="../images/logo.svg"
                alt="logo"
                placeholder="logo"
              />
            </Link>
          </div>
        </div>
        <div className={navLinks}>
          <ul className={navUlLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/work">Work
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/contact">Contact
              </Link>
            </li>
          </ul>
          <div className={navButtom}>
            <a target="_blank" className={navLinkText} rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </nav>

      <header className={siteTitle}>Daniel Rangel </header>
      <main className={container}>
        <h1 className={heading}>Daniel Rangel </h1>
        {children}
      </main>
    </div >
  )
}

export default Layout;
