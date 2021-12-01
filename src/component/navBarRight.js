import React from "react"
import { Text } from "@chakra-ui/react"
import SideLateral from "./sideLateral"
import { LinkItem } from "./navbar"

const NavBarRight = (props) => {
  //fill="none" stroke="currentColor" strokeWidth={1}
  return (
    <SideLateral right={0} bottom={0} mr={5}  {...props}>
      <LinkItem
        href="mailto:danyelrange58@gmail.com"
        mb={3}
      >

        <Text
          _hover={{ transform: "scale(1.15)" }}
        >
          danyelrange58@gmail.com
        </Text>

      </LinkItem>
    </SideLateral>
  )
}

export default NavBarRight
