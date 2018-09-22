import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import sharedStyles from './../styles/container';

export default class ActionsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={sharedStyles.container}>
        <Text>ActionsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
