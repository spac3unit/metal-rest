import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import ActiveLink from './ui/ActiveLink'
import BackButton from './ui/Button'

@withRouter
@inject('store')
@observer
class TopBar extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store.SuperStore
  }
  render() {
    const { authenticated } = this.store
    return (
      <div className='topbar'>
        <TopNav />
      </div>
    )
  }
}

class TopNav extends Component {
  render() {
    return (
      <nav>
        <ActiveLink activeOnlyWhenExact={true} to='/' label='Home'>
          Home
        </ActiveLink>
        <ActiveLink to='/lastfm' label='Lastfm'>
          Lastfm
        </ActiveLink>
        <BackButton />
      </nav>
    )
  }
}

export default TopBar
