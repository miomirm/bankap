import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import sharedStyles from './../styles/container';

export default class TransactionsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={sharedStyles.container}>
        <Text>TransactionsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
