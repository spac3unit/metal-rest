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
      <button className='button icon-left' onClick={this.context.router.history.goBack}>
        Back
      </button>
    )
  }
}
export default BackButton
