import * as React from "react"
import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
    @font-face{
      font-family: "'JetBrains Mono'";
      src: url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap');
    }
  `}
  />
)
export default Fonts
