import { Theme } from '@mui/system'

const showInfoPanelStyles = (theme: Theme) => ({
  wrapper: {
    background: theme.palette.primary[700],
    borderRadius: '10px',
    padding: '1rem',
  },
  panelTitle: {
    '&.MuiTypography-root': {
      fontSize: '2rem',
    },
  },
  row: {
    display: 'flex',
    gap: 1,
  },
  title: {
    '&.MuiTypography-root': {
      fontSize: '1.2rem',
      fontWeight: '700',
      marginRight: '6px',
    },
  },
  default: {
    '&.MuiTypography-root': {
      fontSize: '1.2rem',
    },
  },
  green: {
    '&.MuiTypography-root': {
      fontSize: '1.2rem',
      color: theme.palette.secondary.green,
    },
  },
})

export default showInfoPanelStyles
