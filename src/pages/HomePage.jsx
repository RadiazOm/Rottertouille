import SupermarktList from "../components/supermarketlist/SupermarktList";
import {Text, View} from "react-native";
import Search from "../components/common/search/Search";
import FlatListRecepten from "../components/receipe/FlatListRecepten";
import FlatListCulinary from "../components/receipe/FlatListCulinary";
import Products from "../components/productlisthome/Products";
import {NavigationContainer} from "@react-navigation/native";
import ProductPage from "./ProductPage";
import receptenTonen from "../components/receipe/receptenTonen";
import ReceptDetails from "../components/receipe/ReceptDetails";
import AllRecepten from "../components/receipe/AllRecepten";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function HomePage({navigation}) {
    const Stack = createNativeStackNavigator();
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