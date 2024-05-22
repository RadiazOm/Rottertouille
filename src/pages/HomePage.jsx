import SupermarktList from "../components/supermarketlist/SupermarktList";
import {Text, View} from "react-native";
import Search from "../components/common/search/Search";
import FlatListRecepten from "../components/receipe/FlatListRecepten";
import Supermarkt from "../components/supermarketlist/Supermarkt";
import FlatListCulinary from "../components/receipe/FlatListCulinary";
import Products from "../components/productlisthome/Products";
import ModalProductDetail from "../components/common/modal/ModalProductDetail";
import Navbar from "../components/common/navbar/Navbar";

export default function HomePage ({navigation}) {
    return(
        <>
            <View>
                <Search/>
                        <SupermarktList navigation={navigation}/>
               <Products/>
                <FlatListRecepten navigation={navigation}/>
                <Navbar navigation={navigation}/>
            </View>
        </>
    )
}