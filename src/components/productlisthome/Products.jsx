import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';

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
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.image_url,
                            }}
                        />
                        <Text>{item.name}</Text>
                        <Text>Є{item.price}</Text>

                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        marginLeft: 4,
    },
    header: {
        paddingHorizontal: 10,

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
        paddingBottom: '10%',
        marginVertical: "45%",
        marginHorizontal: 7,
        height: 150,
        width: 135, // or whatever width you want
        marginRight: 14,


    },

    tinyLogo: {
        width: '100%',
        height: '100%',
        borderRadius:10,
    },
});

export default Products;