import React, { Component } from 'react'
import {observer} from 'mobx-react'

import Store from './Store'

class Value extends Component {
  render () {
    return (
      <div>
        {Store.counter}
      </div>
    )
  }
}

export default observer(Value)
