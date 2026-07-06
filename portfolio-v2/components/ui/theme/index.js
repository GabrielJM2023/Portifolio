import { createSystem, defaultConfig } from "@chakra-ui/react"

import { colors } from "./color"
import { fonts } from "./fonts"
import { radii } from "./radii"
import { shadows } from "./shadows"
import { semanticTokens } from "./semantic-tokens"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors,
      fonts,
      radii,
      shadows,
    },

    semanticTokens,
  },
})