import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import GenresList from './components/GenresList'
import AlbumsList from './components/AlbumsList'
import AlbumView from './components/AlbumView'
import TopBar from './components/TopBar'
import Lastfm from './components/Lastfm'
import './App.css'

@inject('store')
@observer
class App extends Component {
  componentDidMount() {
    window.store = this.props.store
  }

  render() {
    const store = this.props.store.SuperStore
    return (
      <Router>
        <div className='App'>
          <TopBar />

          <Route exact path='/' component={GenresList} />
          <Route path='/genre/:genreName' component={AlbumsList} />
          <Route path='/album/:id' component={AlbumView} />
          <Route path='/lastfm' component={Lastfm} />
        </div>
      </Router>
    )
  }
}

export default App
