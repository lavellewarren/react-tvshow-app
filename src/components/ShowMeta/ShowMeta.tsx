import { FC } from 'react'
import { makeStyles } from '@mui/styles'

import { Box, Typography } from '@mui/material'

import styles from 'assets/jss/showMetaStyles'
import CustomImage from 'components/CustomImage'

const useStyles = makeStyles(styles)

interface Props {
  imageSrc: string
  imageAlt: string
  content: string
}

const ShowMeta: FC<Props> = (props) => {
  const { imageSrc, imageAlt, content } = props

  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imageWrapper}>
        <CustomImage src={imageSrc} alt={imageAlt} />
      </Box>
      <Typography component={'div'} className={classes.content}>
        {content}
      </Typography>
    </Box>
  )
}

export default ShowMeta
