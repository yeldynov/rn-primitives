import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BoxScreen = () => {
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.childOneStyle} />
      <View style={styles.viewTwoParentStyle}>
        <View style={styles.childTwoStyle} />
      </View>
      <View style={styles.childThreeStyle} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  parentViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  childOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  childTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  viewTwoParentStyle: {
    height: 200,
    justifyContent: 'flex-end',
  },
  childThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'purple',
  },
});
