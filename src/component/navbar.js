import * as React from "react"
import { Link } from 'gatsby'
import Logo from "./logo"
import ThemeToggleButton from "./theme-toggle-button.js"
import {
  Container,
  Box,
  Link as LinkChakra,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import PDF from "../../curriculum/curriculum.pdf"

const LinkItem = ({ href, path, _target, children, flex, flexGrow, ...props }) => {
  // const active = path === href
  // const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  const render = (href && path)
    ?
    (
      <LinkChakra
        as={Link}
        p={2}
        to={href}
        // bg={active ? 'grassTeal' : undefined}
        // color={active ? '#202023' : inactiveColor}

        {...props}
      >
        {children}

      </LinkChakra>
    )
    :
    (<LinkChakra display="flex" flex={flex} flexGrow={flexGrow} href={href}
      p={2}
      // color={active ? '#202023' : inactiveColor}
      _target={_target}

      {...props}
    >
      {children}

    </LinkChakra>)


  return render
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="sticky"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      {...props}
    >

      <Container
        display="flex"
        p={2}
        maxW={{ base: "100%", md: "90%" }}//"container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >

        <Flex align="left" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>


        <Stack
          direction={{
            base: 'column', md: 'row'
          }}
          justifySelf="flex-end"
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="right"
          flexGrow={1}
          mr={5}
          mt={{ base: 4, md: 0 }}

        >
          {/* <LinkItem href="/about" path={path}> */}
          {/*   About */}
          {/* </LinkItem> */}
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>

          <LinkItem variant='outline' ml={4} href={PDF} target="_blank">Resume</LinkItem>
        </Stack>

        <Box flexShrink={{ md: 1 }} flexGrow={{ base: 1, md: 0 }} mx={4} display="flex" justifyContent="right" alignItems="center" >
          <ThemeToggleButton />

          <Box
            display={{ base: "inline-block", md: 'none' }}
            ml={4}>
            <Menu w="auto" id="nav-bar">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="options"
              />
              <MenuList display="inline-flex" flexDirection="column" alignItems="flex-end">
                {/* <Link to="/about"> */}
                {/*   <MenuItem w="auto" as={LinkChakra} >About</MenuItem> */}
                {/* </Link> */}
                <Link to="/work">
                  <MenuItem w="auto" as={LinkChakra} >Work</MenuItem>
                </Link>
                <Link to="/contact">
                  <MenuItem w="auto" as={LinkChakra} >Contact</MenuItem>
                </Link>
                <Link as={LinkChakra} href={PDF} target="_blank">
                  <MenuItem w="auto" >Resume</MenuItem>
                </Link>

              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box >
  )
}

export {
  Navbar,
  LinkItem
}
