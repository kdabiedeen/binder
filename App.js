import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  PanResponder,
  Animated
} from 'react-native'

const fbImage = 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21740009_10155551554225821_4509110330799844755_n.jpg?_nc_cat=0&oh=9e90a2e9c7a8e533fdd8017198c097a5&oe=5B4F80EC'

export default class App extends Component {
  componentWillMount() {
    this.pan = new Animated.ValueXY()

    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan.x, dy:this.pan.y},
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.pan, {
          toValue: {x:0, y:0},
          friction: 4.5,
        }).start()
      }
    })
  }
  render() {
    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    })

    const animatedStyle = {
      transform: [
        {translateX: this.pan.x},
        {translateY: this.pan.y},
        {rotate: rotateCard},
      ],
    }

    return (
      <Animated.View
        {...this.cardPanResponder.panHandlers}
        style={[styles.card, animatedStyle]}>
        <Image
          style={{flex:1}}
          source={{uri: fbImage}}
        />
        <View style={{margin:20}}>
          <Text style={{fontSize:20}}>Mahnoor, 24</Text>
          <Text style={{fontSize:15, color:'darkgrey'}}>Fly Girl</Text>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
  },
})
