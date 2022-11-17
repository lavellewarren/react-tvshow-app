import { Grid } from '@mui/material'

import MainLayout from 'layouts'
import InfoPanel from 'components/InfoPanel'
import EpisodeMeta from 'components/EpisodeMeta'

const EpisodePage = () => {
  return (
    <MainLayout pageTitle='For Better or Worse'>
      <Grid container>
        <Grid item sm={12} md={8}>
          <EpisodeMeta
            imageSrc='https://static.tvmaze.com/uploads/images/large_landscape/428/1070166.jpg'
            imageAlt={'For Better or Worse'}
            content={
              "On the day of Kit and Bell's wedding, Bell and Conrad get pulled away to tend to the ill daughter of a major hospital donor. Meanwhile, Billie takes Gigi and Sammie dress shopping."
            }
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <InfoPanel
            panelTitle={'Episode Info'}
            data={[
              {
                title: 'Number',
                content: 'Season 6, Episode 6',
                type: 'green',
              },
              {
                title: 'Airdate',
                content: 'Tuesday Oct 25, 2022 at 20:00',
                type: 'default',
              },
              {
                title: 'Runtime',
                content: '62 minutes',
                type: 'default',
              },
              {
                title: 'Writer',
                content: 'Marc Halsey',
                type: 'green',
              },
              {
                title: 'Director',
                content: 'Manish Dayal',
                type: 'green',
              },
            ]}
          />
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default EpisodePage
