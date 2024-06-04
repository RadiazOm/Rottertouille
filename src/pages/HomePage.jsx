import SupermarktList from "../components/supermarketlist/SupermarktList";
import {StyleSheet, View, ScrollView} from "react-native";
import Search from "../components/common/search/Search";
import FlatListRecepten from "../components/receipe/FlatListRecepten";
import FlatListCulinary from "../components/receipe/FlatListCulinary";
import Products from "../components/productlisthome/Products";

export default function HomePage({navigation}) {

    return (
        <>
                <ScrollView>
                    <Search/>
                    <FlatListRecepten navigation={navigation}/>
                    <FlatListCulinary/>
                    <Products/>
                    <SupermarktList navigation={navigation}/>
                </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100,
        height:400
    }
})