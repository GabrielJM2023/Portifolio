import { defineSemanticTokens } from "@chakra-ui/react"

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.gray.950}",
      },
    },

    surface: {
      value: {
        base: "{colors.gray.50}",
        _dark: "{colors.gray.900}",
      },
    },

    border: {
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },

    text: {
      value: {
        base: "{colors.gray.900}",
        _dark: "{colors.white}",
      },
    },

    muted: {
      value: {
        base: "{colors.gray.600}",
        _dark: "{colors.gray.400}",
      },
    },
  },
})