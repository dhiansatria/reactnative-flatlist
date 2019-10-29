/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ListView, // deprecated
  FlatList
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

const data = [
  {
    id: '123456',
    title: 'Android Prog'
  },
  {
    id: '7923232',
    title: 'Ios Programming'
  },
  {
    id: '677876876',
    title: 'Web Programming'
  }
]

export default class extends Component {
  render () {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} />}
        />
      </View>
    )
  }
}

function Item ({ title }) {
  return (
    <View>

      <Text onPress={() => alert(title) } > {title} </Text>
    </View>
  )
}

