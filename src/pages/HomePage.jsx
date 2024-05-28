import SupermarktList from "../components/supermarketlist/SupermarktList";
import {Text, StyleSheet, View, ScrollView} from "react-native";
import Search from "../components/common/search/Search";
import FlatListRecepten from "../components/receipe/FlatListRecepten";
import Supermarkt from "../components/supermarketlist/Supermarkt";
import FlatListCulinary from "../components/receipe/FlatListCulinary";
import Products from "../components/productlisthome/Products";
import ModalProductDetail from "../components/common/modal/ModalProductDetail";
import Navbar from "../components/common/navbar/Navbar";

export default function HomePage({navigation}) {

    return (
        <>
            <View className={"mb-14 pt-5"}>
                <ScrollView>
                    <Search/>
                    <FlatListRecepten navigation={navigation}/>
                    <FlatListCulinary/>
                    <Products/>
                    <SupermarktList navigation={navigation}/>
                </ScrollView>

    <Navbar navigation={navigation}/>
            </View>
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