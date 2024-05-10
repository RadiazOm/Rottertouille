import {FlatList, SafeAreaView, Text, TouchableHighlight, View} from "react-native";
import Product from "./Product";
import ProductImage from '../../../assets/brood.jpg'
import Supermarkt from "../supermarketlist/Supermarkt";

function ProductList() {

    const data = [
        {
            id:"1",
            title: "Brood",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"2",
            title: "Frambozen",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"3",
            title: "Melk",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"4",
            title: "Kaas",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"5",
            title: "Yoghurt",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
    ]

    return (
        <>
            <SafeAreaView>
            <View className={"grid grid-cols-4 col-span-3 gap-2"}>
                <FlatList className={"mt-10 w-80"}
                          data={data}
                          numColumns={2}
                          horizontal={false}
                          renderItem={({item}) => <TouchableHighlight className={""}><Product
                              title={item.title}/></TouchableHighlight>}
                          keyExtractor={item => item.id}
                />
                <Product/>
            </View>
            </SafeAreaView>
        </>
    )
}

export default ProductList