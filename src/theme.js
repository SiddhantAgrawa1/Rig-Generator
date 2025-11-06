import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    worldline: {
      50: '#2C7A7B',
      100: '#f0faf8',
      500: '#2C7A7B',
      600: '#2C7A7B',
      900: '#2C7A7B',
    },
  },
  fonts: {
    body: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    heading: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
})

export default theme