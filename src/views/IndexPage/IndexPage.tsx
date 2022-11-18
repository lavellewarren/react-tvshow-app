import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Grid } from '@mui/material'

import MainLayout from 'layouts'
import CustomButton from 'components/CustomButton'
import CustomTable from 'components/CustomTable'
import InfoPanel from 'components/InfoPanel'
import ShowMeta from 'components/ShowMeta'

import { Episode, Tvshow } from 'typings'

const IndexPage = () => {
  const navigate = useNavigate()
  const { main } = useSelector((state: any) => ({ ...state }))
  const {
    tvshow,
    episodes,
  }: {
    tvshow: Tvshow | null
    episodes: Episode[]
  } = main

  const [limit, setLimit] = useState<number>(0)

  const handleClickShowMore = () => {
    if (limit + 5 < episodes.length) {
      setLimit(limit + 5)
    } else {
      setLimit(episodes.length)
    }
  }

  const handleClickRow = (episodeIdx: number) => () => {
    navigate(`/episode/${episodeIdx + 1}`)
  }

  useEffect(() => {
    if (episodes.length === 0) {
      setLimit(0)
    } else {
      setLimit(5)
    }
  }, [episodes])

  return (
    <MainLayout pageTitle={tvshow?.name ?? ''}>
      <Grid container>
        <Grid item sm={12} md={8}>
          <ShowMeta
            imageSrc={tvshow?.image ?? ''}
            imageAlt={tvshow?.name ?? ''}
            content={tvshow?.summary ?? ''}
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <InfoPanel
            panelTitle={'Show Info'}
            data={[
              {
                title: 'Network',
                content: tvshow?.network ?? '',
                type: 'green',
              },
              {
                title: 'Schedule',
                content: tvshow?.schedule ?? '',
                type: 'default',
              },
              {
                title: 'Status',
                content: tvshow?.status ?? '',
                type: 'default',
              },
              {
                title: 'Show Type',
                content: tvshow?.type ?? '',
                type: 'default',
              },
              {
                title: 'Genres',
                content: tvshow?.genres ?? '',
                type: 'green',
              },
              {
                title: 'Official site',
                content: tvshow?.website ?? '',
                type: 'default',
              },
              {
                title: 'Ratings',
                content: String(tvshow?.rating) ?? '',
                type: 'default',
              },
            ]}
          />
        </Grid>
      </Grid>
      <Grid>
        <CustomTable
          headers={['Episode Name', 'Airdate']}
          rows={episodes.slice(0, limit).map((episode) => [episode.name, episode.airdate])}
          handleClickRow={handleClickRow}
        />
      </Grid>
      <Grid display={'flex'} justifyContent={'center'} mt={1}>
        <CustomButton
          disabled={limit === episodes.length}
          btnColor={'green'}
          onClick={handleClickShowMore}
        >
          Show more...
        </CustomButton>
      </Grid>
    </MainLayout>
  )
}

export default IndexPage
