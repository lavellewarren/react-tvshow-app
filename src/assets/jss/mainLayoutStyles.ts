import { Theme } from '@mui/system'

const mainLayoutStyles = (theme: Theme) => ({
  wrapper: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '3rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '1rem',
    },
  },
  contentWrapper: {
    maxWidth: '80rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  pageTitle: {
    '&.MuiTypography-root': {
      fontSize: '3rem',
    },
  },
})

export default mainLayoutStyles
