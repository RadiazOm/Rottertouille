import {Image, Text, TextInput, View} from "react-native";
import ProductImage from '../../../assets/brood.jpg'

const Product = ({title}) => {
    return(
        <>
                <View className={"mt-3 ml-0 pr-5 h-36"}>
                    <Image className={"rounded h-36 w-40"} source={ProductImage}/>
                </View>
                <View className={"flex m-2 flex-col"}>
                    <Text className={""}>{title}</Text>
                    <Text className={"line-through flex-row"}>€ 4,00</Text>
                    <Text className={"flex-row"}>€ 2,50</Text>
                </View>
        </>
    )
}

export default Product;