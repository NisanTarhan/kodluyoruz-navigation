import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  state = {
    data: [
       {
         name: 'Yasin',
         surname: 'Ugurlu',
         className: '1A',
         phone: '045234234'
       },
       {
        name: 'Veli',
        surname: 'Ugurlu2',
        className: '1A',
        phone: '045234234'
      },
      {
        name: 'Ahmet',
        surname: 'Ugurlu1',
        className: '2A',
        phone: '045234234'
      },
      {
        name: 'Mehmet',
        surname: 'Ugurlu3',
        className: '4A',
        phone: '045234234'
      },
      ]
  }
  render() {
    return (
      <View style={{ 
          flex: 1, 
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
      
        <Text> Login Sayfası </Text>



        <Text 
        style={{ marginTop: 20, padding: 20, backgroundColor: 'red', color: 'white'}}
        onPress={()=> Actions.home({ type: 'replace', dataHome: this.state.data })}

        > Login </Text>

        <Text 
        style={{ marginTop: 20, padding: 20, backgroundColor: 'blue', color: 'white'}}
        onPress={()=> Actions.register({ type: 'push'})}

        > Kayot ol </Text>
        </View>
     
    );
  }
}
