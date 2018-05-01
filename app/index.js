import React, {Component} from 'react'
import * as firebase from 'firebase'
import Home from './screens/home'

const firebaseConfig = {
  apiKey: "AIzaSyDfrFkfr1WRZtnePUxlAUdJZZWj5XjXzEQ",
  databaseURL: "https://binder-99f7c.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

export default class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}
