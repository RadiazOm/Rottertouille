import {Text, TextInput, View} from "react-native";
import ProductList from "../components/productlist/ProductList";
function ProductPage({route}) {
    const item = route.params.title
    return(
        <>
            <View>
                <View className={" h-36 w-40 ml-7 mt-10"}>
                    <Text className={"font-bold w-full"}>Zoeken naar product</Text>
                    <TextInput className={"border-primaryColor rounded-[100px] border-2 mt-2 w-60 h-10 pl-5 bg-white"}>product...</TextInput>
                    <Text className={"font-bold mt-5 text-xl w-full"}>Producten van {item} </Text>
                <ProductList title={item}/>
                </View>
            </View>
        </>
    )
}

export default ProductPage;