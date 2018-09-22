import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import sharedStyles from './../styles/container';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={sharedStyles.container}>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
