import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import IndexPage from 'views/IndexPage'

import theme from 'theme'
import EpisodePage from 'views/EpisodePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/episode' element={<EpisodePage />} />
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
