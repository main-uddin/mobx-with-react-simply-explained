import React, { Component } from 'react'
import { observer } from 'mobx-react'

import IncreaseByOne from './IncreaseByOne'
import DecreaseByOne from './DecreaseByOne'
import Value from './Value'

class App extends Component {
  render () {
    return (
      <div>
        <Value />
        <br/>
        <IncreaseByOne />
        <br/>
        <DecreaseByOne />
      </div>
    )
  }
}

export default observer(App)

