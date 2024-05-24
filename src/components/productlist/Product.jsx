import {Button, Image, Modal, Text, TextInput, TouchableHighlight, View} from "react-native";
import ProductImage from '../../../assets/brood.jpg'
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalProductDetail from "../common/modal/ModalProductDetail";
import {useState} from "react";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const Product = ({title, price, discount, img}) => {
    const [showModal, setShowModal] = useState(false);
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

    return (
        <>
            <View className={"mt-3 ml-0 pr-5 h-36"}>
                <Image className={"rounded h-25 w-25"} source={ProductImage}/>
            </View>
            <View className={"flex m-2 flex-col"}>
                <Text className={""}>{title}</Text>
                <Text className={"line-through flex-row"}>€{Math.round(price * 100) / 100}</Text>
                <Text className={"flex-row"}>€ {Math.round(newPrice * 100) / 100}</Text>
                <View className={"flex"}>
                    <Button onPress={storeProductsAsync} title={"Add to list"}
                            classname={"w-20 bg-primaryColor h-20"}></Button>
                    <Text>{discount}</Text>
                </View>
            </View>
        </>
    )
}

export default Product;