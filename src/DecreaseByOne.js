import React, { Component } from 'react'

import Store from './Store'

class DecreaseByOne extends Component {
  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>-</button>
      </div>
    )
  }
  handleClick () {
    Store.counter--
  }
}

export default DecreaseByOne
