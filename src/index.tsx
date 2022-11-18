import React from 'react'
import ReactDOM from 'react-dom/client'
import 'assets/css/index.css'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
