import {Image, Text, TextInput, View} from "react-native";
import ProductImage from '../../../assets/brood.jpg'

const Product = ({title, price, discount, img}) => {
    const newPrice = price - discount;
    return(
        <>
                <View className={"mt-3 ml-0 pr-5 h-36"}>
                    <Image className={"rounded h-36 w-40"} source={ProductImage}/>
                </View>
                <View className={"flex m-2 flex-col"}>
                    <Text className={""}>{title}</Text>
                    <Text className={"line-through flex-row"}>€{Math.round(price * 100) / 100}</Text>
                    <Text className={"flex-row"}>€ {Math.round(newPrice * 100) / 100}</Text>
                    <View className={"flex"}>
                        <Text>{discount}</Text>
                    </View>
                </View>
        </>
    )
}

export default Product;