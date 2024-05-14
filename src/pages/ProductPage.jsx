import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://89.33.85.29:1068/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: item.image_url,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 100, // or whatever width you want
    marginRight: 10
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default ProductsPage;