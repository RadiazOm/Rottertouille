import {Button, Image, Modal, Text, TextInput, TouchableHighlight, View} from "react-native";
import ProductImage from '../../../assets/brood.jpg'
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalProductDetail from "../common/modal/ModalProductDetail";
import {useState} from "react";

const Product = ({title, price, discount, img}) => {
    const [showModal, setShowModal] = useState(false);
    const [list, setList] = useState([]);
    const newPrice = price - discount;

    const product = {
        title: title,
        price: price,
        discount:discount
    }

    const storage = new Storage({
        // maximum capacity, default 1000 key-ids
        size: 1000,

        // Use AsyncStorage for RN apps, or window.localStorage for web apps.
        // If storageBackend is not set, data will be lost after reload.
        storageBackend: AsyncStorage, // for web: window.localStorage

        // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
        // can be null, which means never expire.
        defaultExpires: null,

        // cache data in the memory. default is true.
        enableCache: true,

        // if data was not found in storage or expired data was found,
        // the corresponding sync method will be invoked returning
        // the latest data.
        sync: {
            // we'll talk about the details later.
        }
    });
    let storageId = Math.random();
    function addToList() {
        // storage.save({
        //     key: 'products',
        //     id: '1001',
        //     data: product,
        //     expires: null
        // });
        // storage.load({
        //
        // }).then(ret => {
        //     console.log(ret.id)
        // }).catch((e) => {
        //     console.log("the error is" + e);
        // })
        AsyncStorage.setItem("products", JSON.stringify(product), ()=> {
            AsyncStorage.getItem('products', (err, result) => {
                console.log(result);
            })
        })

    }
    return(
        <>
                <View className={"mt-3 ml-0 pr-5 h-36"}>
                    {/*<Modal transparent={true} visible={showModal} animationType={"fade"}>*/}
                    {/*    <ModalProductDetail navigation={navigation} title={title}/>*/}
                    {/*</Modal>*/}
                    <TouchableHighlight onPress={()=>{setShowModal(true)}}>
                        <Image className={"rounded h-36 w-40"} source={ProductImage}/>
                    </TouchableHighlight>
                </View>
                <View className={"flex m-2 flex-col"}>
                    <Text className={""}>{title}</Text>
                    <Text className={"line-through flex-row"}>€{Math.round(price * 100) / 100}</Text>
                    <Text className={"flex-row"}>€ {Math.round(newPrice * 100) / 100}</Text>
                    <View className={"flex"}>
                        <Button onPress={addToList} title={"Add to list"} classname={"w-20 bg-primaryColor h-20"}></Button>
                        <Text>{discount}</Text>
                    </View>
                </View>
        </>
    )
}

export default Product;