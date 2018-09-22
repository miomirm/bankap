import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import SwitchToMainApp from './../../components/SwitchToMainApp';

import sharedStyles from './../styles/container';

class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={sharedStyles.container}>
        <Text>SignUpScreen</Text>
        <Button title="Login now" onPress={() => { this.props.navigation.navigate('Login') }} />
        <SwitchToMainApp navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default SignUpScreen;
