import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://89.33.85.29:1068/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Producten</Text>
        <Text style={styles.filter}>Filter</Text>
      </View>
      <FlatList
        data={products}
        horizontal={true}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  filter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
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

export default Products;