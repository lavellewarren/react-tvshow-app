import React, { FC } from 'react'
import { makeStyles } from '@mui/styles'

import { Box, Typography, CircularProgress } from '@mui/material'

import styles from 'assets/jss/mainLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  children: React.ReactNode
  pageTitle: string
}

const isLoading = false

const MainLayout: FC<Props> = (props) => {
  const classes = useStyles()

  const { children, pageTitle } = props

  if (isLoading) {
    return (
      <Box display='flex' alignItems='center' justifyContent='center' minHeight={'100vh'}>
        <CircularProgress size={64} />
      </Box>
    )
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.contentWrapper}>
        <Typography className={classes.pageTitle}>{pageTitle}</Typography>

        {children}
      </Box>
    </Box>
  )
}

export default MainLayout
