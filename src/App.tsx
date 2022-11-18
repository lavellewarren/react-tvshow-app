import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import IndexPage from 'views/IndexPage'

import theme from 'theme'
import EpisodePage from 'views/EpisodePage'
import { getEpisodeList, getShowInfo } from 'services'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let isUpdated = true
    if (isUpdated) {
      ;(async () => {
        const tvshow = await getShowInfo(1)
        const episodes = await getEpisodeList(1)

        dispatch({
          type: 'INIT_TVDATA',
          payload: {
            tvshow,
            episodes,
          },
        })
      })()
    }
    return () => {
      isUpdated = false
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/episode/:idx' element={<EpisodePage />} />
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
