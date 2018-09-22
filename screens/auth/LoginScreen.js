import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import SwitchToMainApp from './../../components/SwitchToMainApp';

import sharedStyles from './../styles/container';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={sharedStyles.container}>
        <Text>LoginScreen</Text>
        <Button title="Sign Up now" onPress={() => { this.props.navigation.navigate('SignUp') }} />
        <SwitchToMainApp navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default LoginScreen;
