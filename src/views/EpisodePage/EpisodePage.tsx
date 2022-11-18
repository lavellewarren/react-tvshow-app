import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { Grid, Box } from '@mui/material'

import MainLayout from 'layouts'
import InfoPanel from 'components/InfoPanel'
import EpisodeMeta from 'components/EpisodeMeta'
import { Episode } from 'typings'
import CustomButton from 'components/CustomButton'

const EpisodePage = () => {
  const navigate = useNavigate()
  const { idx } = useParams()

  const { main } = useSelector((state: any) => ({ ...state }))
  const {
    episodes,
  }: {
    episodes: Episode[]
  } = main

  const [episodeIdx, setEpisodeIdx] = useState<number>(-1)
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>()

  const handleClickGoToHome = () => {
    navigate('/')
  }

  const handleClickPrev = () => {
    if (episodeIdx > 1) {
      navigate(`/episode/${episodeIdx - 1}`)
    }
  }

  const handleClickNext = () => {
    if (episodeIdx < episodes.length) {
      navigate(`/episode/${episodeIdx + 1}`)
    }
  }

  useEffect(() => {
    if (!isNaN(Number(idx))) {
      setEpisodeIdx(Number(idx))
    }
  }, [idx])

  useEffect(() => {
    if (episodeIdx > 0 && episodeIdx <= episodes.length) {
      setSelectedEpisode(episodes[episodeIdx - 1])
    }
  }, [episodeIdx, episodes])

  if (!selectedEpisode) {
    return (
      <MainLayout pageTitle={''}>
        <Box display='flex' alignItems='center' justifyContent='center' minHeight={'100vh'}>
          <CustomButton btnColor={'dark'} onClick={handleClickGoToHome}>
            Go to Home
          </CustomButton>
        </Box>
      </MainLayout>
    )
  }

  return (
    <MainLayout pageTitle={selectedEpisode?.name ?? ''}>
      <Grid container>
        <Grid item sm={12} md={8}>
          <EpisodeMeta
            imageSrc={selectedEpisode?.image ?? ''}
            imageAlt={selectedEpisode?.name ?? ''}
            content={selectedEpisode?.summary ?? ''}
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <InfoPanel
            panelTitle={'Episode Info'}
            data={[
              {
                title: 'Number',
                content: selectedEpisode?.number ?? '',
                type: 'green',
              },
              {
                title: 'Airdate',
                content: selectedEpisode?.airdate ?? '',
                type: 'default',
              },
              {
                title: 'Runtime',
                content: selectedEpisode?.runtime ?? '',
                type: 'default',
              },
              {
                title: 'Rating',
                content: String(selectedEpisode?.rating) ?? '',
                type: 'green',
              },
            ]}
          />
        </Grid>
      </Grid>
      <Grid display={'flex'} justifyContent={'center'} mt={5}>
        <CustomButton btnColor={'green'} onClick={handleClickGoToHome}>
          Go to Home
        </CustomButton>
      </Grid>
    </MainLayout>
  )
}

export default EpisodePage
