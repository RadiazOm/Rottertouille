import React from 'react';
import {FlatList, SafeAreaView, TouchableHighlight, View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Product from "./Product";
import useFetch from "../../hooks/useFetch";

function ProductList({title, navigation}) {
    const { data, loading, error } = useFetch('http://89.33.85.29:1068/products');

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Er is een fout opgetreden bij het ophalen van de gegevens.</Text>
            </View>
        );
    }

    // Debugging statements
    // console.log("Data fetched: ", data);
    console.log("Title: ", title);

    const filteredData = data.filter(({supermarket}) => supermarket.toLowerCase().includes(title.toLowerCase()));

    // Debugging statements
    // console.log("Filtered Data: ", filteredData);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={filteredData}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableHighlight style={styles.itemContainer} onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}>
                        <View style={styles.item}>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                            <Text>{item.category}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    item: {
        padding: 10,
    },
});

export default ProductList;