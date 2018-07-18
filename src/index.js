import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import store from './stores/SuperStore'
import SuperStore from './stores/SuperStore'
import AlbumsStore from './stores/AlbumsStore'
import GenresStore from './stores/GenresStore'
import './index.css'

const stores = {
  SuperStore,
  AlbumsStore,
  GenresStore,
}

window._____APP_STATE_____ = stores

const Root = () => (
  <Provider store={stores}>
    <Router>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render(<Root />, document.getElementById('root'))
