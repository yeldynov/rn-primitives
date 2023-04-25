import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Hello wo!</Text>
      <Button title='Go to Components' onPress={() => navigate('Components')} />
      <Button title='Go to List' onPress={() => navigate('List')} />
      <Button title='Go to Images' onPress={() => navigate('Images')} />
      <Button title='Go to Counter' onPress={() => navigate('Counter')} />
      <Button title='Go to Colors' onPress={() => navigate('Colors')} />
      <Button title='Go to Square' onPress={() => navigate('Square')} />
      <Button title='Go to Text' onPress={() => navigate('Text')} />
      <Button title='Go to Box' onPress={() => navigate('Box')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
