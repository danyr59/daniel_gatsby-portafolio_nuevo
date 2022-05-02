import React from "react"
import { IconButton, Icon } from "@chakra-ui/react"
import { LinkItem } from "../component/navbar.js"
import SideLateral from "./sideLateral"
import { FiLinkedin, FiInstagram, FiGithub, FiTwitter } from "react-icons/fi"

// const theme = extendTheme({
//   layerStyles: {
//     background: {
//       _hover: {
//         bg: "transparent"
//       }
//     }
//   }
// })


export const Icons = ({ aria, href, icon, _id, ...props }) => {
  // console.log(extendTheme({}))
  return (
    <LinkItem
      display="flex"
      id={_id}
      _hover={{ transform: "scale(1.15)" }}
      href={href}
      {...props}
      target="_blank"
    >
      <IconButton
        bg="transparent"
        // _hover={{
        //   bg: "transparent"
        // }}
        layerStyle="nonBackground"
        aria-label={aria}
        icon={<Icon
          {...props}
          w="1.2em"
          h="1.2em"
          as={icon}
        />}

      />

    </LinkItem>
  )
}

const NavBarLeft = (props) => {
  //fill="none" stroke="currentColor" strokeWidth={1}
  return (
    <SideLateral left={0} bottom={0} ml={5} {...props}>
      <Icons _id="Github" icon={FiGithub} href="https://github.com/danyr59" aria="Github" />
      <Icons _id="instagram" icon={FiInstagram} href="https://www.instagram.com/___ddaannyy/" aria="Instagram" />
      <Icons _id="twitter" icon={FiTwitter} href="https://twitter.com/danyr_59" aria="Twitter" />
      <Icons _id="linkedin" icon={FiLinkedin} href="https://www.linkedin.com/in/danyr59/" />
    </SideLateral>
  )
}

export default NavBarLeft
