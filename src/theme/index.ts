import { createTheme } from '@mui/material/styles'
import { PaletteOptions } from '@mui/material'

export const myPalette: PaletteOptions = {
  primary: {
    main: '#ffffff',
    dark: '#0a0a0a',
    100: '#f1f1f1',
    700: '#f7f7f7',
    800: '#f8f8f8',
  },
  secondary: {
    main: '#3c948b',
  },
}

const theme = createTheme({
  palette: myPalette,
  typography: {
    fontFamily: 'Sora',
  },
})

export default theme
