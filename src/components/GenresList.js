import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { action, observable } from 'mobx'
import { Match, Link } from 'react-router-dom'

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
        <div className='cf genres'>
          {!isEmpty ? (
            genres.map(genre => (
              <Link
                to={`/genre/${genre}`}
                key={genre}
                className='fl w-100 w-20-ns tc pv5 ba b--black-20 genre'
              >
                {genre}
              </Link>
            ))
          ) : (
            <h3>Genres List is loading...</h3>
          )}
        </div>
      </div>
    )
  }
}

const GenreItem = () => {
  return (
    <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
      <div className='tc'>
        <img
          src='http://tachyons.io/img/avatar_1.jpg'
          className='br-100 h4 w4 dib ba b--black-05 pa2'
          title='Photo of a kitty staring at you'
        />
        <h1 className='f3 mb2'>Mimi W.</h1>
        <h2 className='f5 fw4 gray mt0'>CCO (Chief Cat Officer)</h2>
      </div>
    </article>
  )
}

export default GenresList
