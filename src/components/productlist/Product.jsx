import {Button, FlatList, Image, Text, View} from "react-native";
import ProductImage from '../../../assets/brood.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from "react";

const Product = ({title, price, discount, item, image}) => {
    const newPrice = price - discount;

    const product = {
        title: title,
        price: price,
        discount: discount
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

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://89.33.85.29:1068/products')
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }, []);

    return (

        <FlatList
            data={products}
            keyExtractor={item => item.name}
            horizontal={false}
            renderItem={({item}) => (
        <View>
            <Image
            source={{uri: item.image}}
            />
        </View>
            )}
        />
        // <>
        //     <View className={"mt-3 ml-0 pr-5 h-36"}>
        //         <Image className={"rounded h-28 w-28"} source={{uri: item.image}}/>
        //     </View>
        //     <View className={"flex m-2 flex-col"}>
        //         <Text className={""}>{title}</Text>
        //         <Text className={"line-through flex-row"}>€{Math.round(price * 100) / 100}</Text>
        //         <Text className={"flex-row"}>€ {Math.round(newPrice * 100) / 100}</Text>
        //         <View className={"flex"}>
        //             <Button onPress={storeProductsAsync} title={"Add to list"}
        //                     classname={"w-20 bg-primaryColor h-20"}></Button>
        //             <Text>{discount}</Text>
        //         </View>
        //     </View>
        // </>
    )
}


export default Product;