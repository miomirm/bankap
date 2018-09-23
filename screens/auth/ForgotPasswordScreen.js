import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import SwitchToMainApp from './../../components/SwitchToMainApp';

import sharedStyles from './../styles/container';

class ForgotPasswordScreen extends React.Component {
  render() {
    return (
      <View style={sharedStyles.container}>
        <Text>ForgotPasswordScreen</Text>
        <Button title="LogIn" onPress={() => { this.props.navigation.navigate('Login') }} />
        <SwitchToMainApp navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default ForgotPasswordScreen;
