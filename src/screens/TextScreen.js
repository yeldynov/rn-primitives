import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.title}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={styles.subtitle}>My name is {name}</Text>

      <Text style={styles.title}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {password.length < 5 && (
        <Text>Passwords must be at least 5 characters</Text>
      )}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});
