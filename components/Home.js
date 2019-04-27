import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Register extends Component {

componentWillMount() {
    console.log('Gelen Veri: ', this.props.dataHome);
    

}
render() {
    return (
      <View style={{ 
          flex: 1, 
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <Text> Ana Sayfa </Text>

        </View>
     
    );
  }
}
