import React, { FC } from 'react'
import { makeStyles } from '@mui/styles'

import { Box, Typography, CircularProgress } from '@mui/material'

import styles from 'assets/jss/mainLayoutStyles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(styles)

interface Props {
  children: React.ReactNode
  pageTitle: string
}

const MainLayout: FC<Props> = (props) => {
  const classes = useStyles()

  const { children, pageTitle } = props
  const { main } = useSelector((state: any) => ({ ...state }))
  const {
    loading,
  }: {
    loading: boolean
  } = main

  if (loading) {
    return (
      <Box display='flex' alignItems='center' justifyContent='center' minHeight={'100vh'}>
        <CircularProgress size={64} color={'secondary'} />
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
