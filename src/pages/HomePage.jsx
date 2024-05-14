import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Products from './components/productlist/products';

const ShowProducts = () => {
  return (
      <View style={styles.container}>
        <Products/>
        <StatusBar style="auto"/>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ShowProducts;