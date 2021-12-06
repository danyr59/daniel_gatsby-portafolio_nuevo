import React from "react"
import { Box, useColorModeValue, Center, Divider, Stack } from "@chakra-ui/react"



const SideLateral = ({ left, bottom, right, top, children, ...props }) => {
  // colorScheme="blue"

  return (
    <Box
      position="fixed"
      left={left}
      bottom={bottom}
      top={top}
      right={right}
      display={{ base: 'none', lg: 'inline-flex' }}
      justifyContent="end"
      justifyItems="flex-end"
      w="auto"
      h="100%"
      css={{ writingMode: "vertical-rl" }}
      {...props}
    >

      <Stack
        display="flex"
        justify="space-around"
        direction="vertical"
        spacing={1}
        align="stretch"
      >
        {children}
        <Center height="90px">
          <Divider orientation="vertical" />
        </Center>
      </Stack>
    </Box>);
}

export default SideLateral
