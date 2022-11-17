import { FC } from 'react'
import { makeStyles } from '@mui/styles'

import { Typography, Box } from '@mui/material'

import styles from 'assets/jss/infoPanelStyles'

const useStyles = makeStyles(styles)

interface Props {
  panelTitle: string
  data: {
    title: string
    content: string
    type: 'default' | 'green'
  }[]
}

const InfoPanel: FC<Props> = (props) => {
  const { panelTitle, data } = props

  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box>
        <Typography className={classes.panelTitle}>{panelTitle}</Typography>
      </Box>
      {data.map((row, idx) => (
        <Box className={classes.row} key={idx}>
          <Typography className={classes.title}>{row.title}:</Typography>
          <Typography className={classes[row.type]}>{row.content}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default InfoPanel
