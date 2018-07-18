import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => {
  return <button>{children}</button>
}

class BackButton extends Component {
  static contextTypes = {
    router: PropTypes.object, // replace with PropTypes.object if you use them
  }

  render() {
    return (
      <a
        onClick={this.context.router.history.goBack}
        className='f6 link dim ph3 pv2 dib white bg-black'
        href='#'
      >
        Back
      </a>
    )
  }
}
export default BackButton
