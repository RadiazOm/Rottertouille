import SupermarktList from "../components/supermarketlist/SupermarktList";
import {Text, View} from "react-native";
import Search from "../components/common/search/Search";
import FlatListRecepten from "../components/receipe/FlatListRecepten";
import FlatListCulinary from "../components/receipe/FlatListCulinary";
import Products from "../components/productlisthome/Products";

export default function HomePage({navigation}) {

    return (
        <>
            <View>
                <Search/>
                <FlatListRecepten navigation={navigation}/>
                <FlatListCulinary/>
                <Products/>
                <SupermarktList navigation={navigation}/>

            </View>
        </>
    )
}