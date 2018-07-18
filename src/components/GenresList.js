import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { action, observable } from 'mobx'

@inject('store')
@observer
class GenresList extends Component {
  componentWillMount() {
    this.props.store.GenresStore.fetchGenres()
  }
  render() {
    const store = this.props.store.GenresStore
    const { genres, isEmpty } = store
    return (
      <div>
        <h3>Genres List</h3>
        <ul className='genres'>
          {!isEmpty ? genres.map(genre => <li key={genre}>{genre}</li>) : <h3>Genres List is loading...</h3>}
        </ul>
      </div>
    )
  }
}

export default GenresList
