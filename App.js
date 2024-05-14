import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShowProducts from './src/pages/HomePage';


export default function App () {
  return (
      <View style={styles.container}>
        <ShowProducts/> 
      </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
