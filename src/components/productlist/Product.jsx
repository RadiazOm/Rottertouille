import {Button, Image, Text, View, StyleSheet,} from "react-native";
import ProductImage from '../../../assets/brood.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from "react-native";
import React from "react";

const {width, height} = Dimensions.get('window');

const Product = ({title, price, discount, img}) => {
    const newPrice = price - discount;

    const product = {
        title: title,
        price: price,
        discount: discount
    }

    if(!title) {
        return ;
    }


    async function storeProductsAsync() {
        try {
            let storage = await AsyncStorage.getItem("products")
            let parsedList = JSON.parse(storage)
            if (storage == null) {
                parsedList = []
            }
            parsedList.push(product);
            let stringifiedList = JSON.stringify(parsedList);
            await AsyncStorage.setItem("products", stringifiedList)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: img}}/>
            </View>
            <View style={styles.flex}>
                <Text style={styles.text}>{title}</Text>
                <Text style={discount ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : ''}>€ {discount ? (parseFloat(discount) + parseFloat(price)).toFixed(2) : price}</Text>
                <View>
                    <Text>{discount ? '€' + price : ''}</Text>
                </View>
                <View style={styles.flex}>
                    <Button onPress={storeProductsAsync} title={"Add to list"}
                            style={styles.button}></Button>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        borderRadius: 5,
        height: 130,
        width: 140,
        marginTop: 10,
    },
    flex: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',


    },
    text: {
        width: 160,
        textAlign: 'center',
        height: height/ 16,
    },
    button: {
        margin: 10,
    },
});
export default Product;