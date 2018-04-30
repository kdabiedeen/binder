import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  PanResponder,
  Animated
} from 'react-native'
import Card from './card'

export default class App extends Component {
  render() {
    return (
      <View>
        <Card />
        <Card />
      </View>
    )
  }
}
