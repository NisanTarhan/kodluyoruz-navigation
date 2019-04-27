import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Router, Scene, Stack, Actions } from 'react-native-router-flux';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


export default class App extends Component {

  renderRight() {
    return(
      <Text 
      onPress={() => Actions.home()}
      style={{ paddingRight: 10, color: 'blue' }}>Add Item</Text>
    );
  }
  render() {
    return (
      <Router 
        // sceneStyle={styles.container}
        navigationBarStyle={styles.navBar}
        titleStyle={styles.titleStyle}
      >
       <Stack key="root">
        <Scene 
          key="login" 
          component={Login} 
          title="Giriş Ekranı"
          initial
          renderRightButton={this.renderRight()}
        />
        <Scene 
          key="register" 
          component={Register} 
          title="Kayıt Ekranı"
        />

        <Scene 
            key="home" 
            component={Home} 
            title="Ana Sayfa"
            
          />

       </Stack>

      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'pink'
  },
  titleStyle: {
    color: 'white'
  },
  container: {
    flex: 1,

    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },

});
