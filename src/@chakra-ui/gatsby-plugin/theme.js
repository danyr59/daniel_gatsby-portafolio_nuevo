import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffa420', '#202023')(props),
      borderColor: mode("gray.800", "whiteAlpha.900")(props)
    },
    '*, *::before, &::after': {
      borderColor: "transparent",
      wordWrap: 'break-word',
    }
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('gray.800', 'whiteAlpha.900')(props),
      textUnderlineOffset: 3
    })
  },
  Divider: {
    baseStyle: (props) => ({
      bg: mode("gray.800", "whiteAlpha.900")(props)
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'JetBrains Mono'"
}

const colors = {
  grassTeal: '#88ccca'
}
const layerStyles = {
  nonBackground: {
    ':hover': {
      bg: "transparent"
    }
  }
}


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config, layerStyles, styles, components, fonts, colors
})
export default theme
