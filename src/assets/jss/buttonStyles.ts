import { Theme } from '@mui/system'

const buttonStyles = (theme: Theme) => ({
  btn: {
    '&.MuiButton-root': {
      padding: '0.75rem 1.5rem',
      borderRadius: '10000px',
      borderStyle: 'solid',
      borderWidth: '1px',
      fontWeight: '400',
      fontSize: '14px',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  },
  dark: {
    '&.MuiButton-root': {
      color: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  green: {
    '&.MuiButton-root': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
})

export default buttonStyles
