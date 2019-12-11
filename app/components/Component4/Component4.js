import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, SafeAreaView } from 'react-native';

const users = [
  { name: 'John Doe', id: '1' },
  { name: 'Joe Schmoe', id: '2' },
  { name: 'Janet Jackson', id: '3' }
]


export default class Component4 extends Component {


  User({ name }) {
    return (
      <View>
        <Text>{name}</Text>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={users}
          renderRow={({ row }) => <User name={row.name} />}
          keyExtractor={row => row.id}
        />
      </SafeAreaView>
    );
  }

}
AppRegistry.registerComponent('Component4', () => Component4);