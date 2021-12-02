import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';
const TextField = ({inputContainerStyle, inputStyle, ...props}) => {
  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      <TextInput style={[styles.input, inputStyle]} {...props} />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  input: {
    padding: 15,
  },
});
