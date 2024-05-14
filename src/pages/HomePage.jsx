import SupermarktList from "../components/supermarketlist/SupermarktList";
import {Text, View} from "react-native";
import Search from "../../src/Component/Search";
import Test from "../../src/Component/test"
import FlatListRecepten from "../../src/Component/FlatListRecepten";
import FlatListCulinary from "../../src/Component/FlatListCulinary";
import Products from "../pages/components/productlist/products";

export default function HomePage ({navigation}) {

    return(
        <>
            <View>

                <Search/>
                <SupermarktList navigation={navigation}/>
                <Test/>
                <Products/>
                <FlatListRecepten navigation={navigation}/>
            </View>
        </>
    )
}