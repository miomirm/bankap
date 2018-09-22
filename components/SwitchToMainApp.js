import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

const SwitchToMainApp = ({ navigate }) => {
  return (
    <Button title="Go to Main App" onPress={() => { navigate('Main') }} />
  );
};

SwitchToMainApp.propTypes = {
  navigate: PropTypes.func.isRequired
}

export default SwitchToMainApp;