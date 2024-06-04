import {Modal, Text, TextInput, View} from "react-native";
import ProductList from "../components/productlist/ProductList";
import React from "react";
import products from "../components/productlisthome/Products";
import Products from "../components/productlisthome/Products";
function ProductPage({route, navigation}) {
    const item = route.params.title
    return(
        <>
            <View>
                <View className={" h-36 w-40 ml-7 mt-10"}>
                    <Text className={"font-bold w-full"}>Zoeken naar product</Text>
                    <TextInput className={"border-primaryColor rounded-[100px] border-2 mt-2 w-60 h-10 pl-5 bg-white"}>product...</TextInput>
                    <Text className={"font-bold mt-5 text-xl w-full"}>Producten van {item} </Text>
                <ProductList navigation={navigation} title={item}/>
                </View>
            </View>
        </>
    )
}

export default ProductPage;