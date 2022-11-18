import { FC } from 'react'
import { makeStyles } from '@mui/styles'

import { Box, Grid, Typography } from '@mui/material'

import styles from 'assets/jss/episodeMetaStyles'
import CustomImage from 'components/CustomImage'
import CustomButton from 'components/CustomButton'

const useStyles = makeStyles(styles)

interface Props {
  imageSrc: string
  imageAlt: string
  content: string
  handleClickPrev: () => void
  handleClickNext: () => void
}

const EpisodeMeta: FC<Props> = (props) => {
  const { imageSrc, imageAlt, content, handleClickPrev, handleClickNext } = props

  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imageWrapper}>
        <CustomImage src={imageSrc} alt={imageAlt} />
      </Box>
      <Box className={classes.contentWrapper}>
        <Grid className={classes.btnGroupWrapper}>
          <CustomButton btnColor={'green'} onClick={handleClickPrev}>
            Prevous Ep.
          </CustomButton>
          <CustomButton btnColor={'green'} onClick={handleClickNext}>
            Next Ep.
          </CustomButton>
        </Grid>
        <Typography component={'div'} className={classes.content}>
          {content}
        </Typography>
      </Box>
    </Box>
  )
}

export default EpisodeMeta
