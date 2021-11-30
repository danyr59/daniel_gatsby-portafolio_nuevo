import React, { useEffect, useState } from "react"
import { Box, Container, IconButton, Icon, Stack } from "@chakra-ui/react"
import { VscGithubInverted } from "react-icons/vsc"
import { LinkItem } from "../component/navbar.js"

const Icons = ({ aria, href, icon, _id, ...props }) => {
  const [id, setId] = useState(_id)
  useEffect(() => {
    const handlerMouseOver = (e) => {
      console.log("bottom encima")
      e.target.style.transform = "scale(1.3)";
    }

    const handlerMouseOut = (e) => {
      console.log("bottom fuera")
      e.target.style.transform = "scale(1)"
    }

    let icon = document.getElementById(id)
    icon.addEventListener("mouseover", handlerMouseOver)
    icon.addEventListener("mouseout", handlerMouseOut)

    return () => {
      icon.removeEventListener("mouseover", handlerMouseOver)
      icon.removeEventListener("mouseout", handlerMouseOut)
    }
  })
  console.log(props)
  return (
    <LinkItem
      display="flex"
      id={_id}
      href={href}
      {...props}
      target="_blank"
    >
      <IconButton
        bg="transparent"
        aria-label={aria}
        icon={<Icon
          variant="outline"
          colorSchema="teal"
          as={icon}
        />}

      />

    </LinkItem>
  )
}

const NavBarLeft = (props) => {


  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      display={{ base: 'none', md: 'flex' }}
      w="auto"
      h="100%"
      css={{ writingMode: "vertical-rl" }}
      {...props}
    >
      <Container
        display="flex"
      >
        <Stack
          height="100%"
          display="flex"
          justify="space-around"
          direction="vertical"
          spacing={1}
          align="stretch"
        >
          <Icons _id="Github" flexGrow={2} icon={VscGithubInverted} href="https://github.com" aria="Github" />
          <Icons _id="otro" flexGrow={1} icon={VscGithubInverted} href="https://github.com" aria="Github" />
        </Stack>
      </Container>
    </Box>);
}

export default NavBarLeft
