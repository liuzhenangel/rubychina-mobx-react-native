import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './app/root'

class RNBase extends React.Component {
  render () {
    return <Root {...this.props} />
  }
}

AppRegistry.registerComponent('rubychina_mobx_react_native', () => RNBase)
