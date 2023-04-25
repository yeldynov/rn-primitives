import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'John', age: 34 },
    { name: 'Mary', age: 23 },
    { name: 'Inga', age: 11 },
    { name: 'Agatha', age: 21 },
    { name: 'Andrew', age: 13 },
    { name: 'Ilon', age: 44 },
    { name: 'Alma', age: 65 },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - {item.age} y.o
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
