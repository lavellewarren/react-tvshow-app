import { Grid } from '@mui/material'

import MainLayout from 'layouts'
import CustomButton from 'components/CustomButton'
import CustomTable from 'components/CustomTable'
import InfoPanel from 'components/InfoPanel'
import ShowMeta from 'components/ShowMeta'

const IndexPage = () => {
  return (
    <MainLayout pageTitle='The Resident'>
      <Grid container>
        <Grid item sm={12} md={8}>
          <ShowMeta
            imageSrc='https://static.tvmaze.com/uploads/images/medium_portrait/424/1061883.jpg'
            imageAlt={'The Resident'}
            content={
              "The Resident is a powerful new medical drama focusing on the final years of a young doctor's training that rips back the curtain to reveal the truth of what really happens, both good and bad, in hospitals across the country."
            }
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <InfoPanel
            panelTitle={'Show Info'}
            data={[
              {
                title: 'Network',
                content: 'FOX (2018 - now)',
                type: 'green',
              },
              {
                title: 'Schedule',
                content: 'Tuesdays at 20:00 (60 min)',
                type: 'default',
              },
              {
                title: 'Status',
                content: 'Running',
                type: 'default',
              },
              {
                title: 'Genres',
                content: 'Drama Thriller Medical',
                type: 'default',
              },
            ]}
          />
        </Grid>
      </Grid>
      <Grid item>
        <CustomTable
          headers={['Episode Name', 'Airdate']}
          rows={[
            ['6x08: The Better Part of Valor', 'Nov 15, 2022'],
            ['6x07: The Chimera', 'Nov 8, 2022'],
          ]}
        />
      </Grid>
      <Grid item display={'flex'} justifyContent={'center'} mt={1}>
        <CustomButton btnColor={'green'}>View Full Episode List</CustomButton>
      </Grid>
    </MainLayout>
  )
}

export default IndexPage
