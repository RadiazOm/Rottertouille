import SupermarktList from "../components/supermarketlist/SupermarktList";
import {StyleSheet, View, ScrollView, ImageBackground, Text} from "react-native";
import Search from "../components/common/search/Search";
import FlatListRecepten from "../components/receipe/FlatListRecepten";
import FlatListCulinary from "../components/receipe/FlatListCulinary";
import Products from "../components/productlisthome/Products";
import Bg from '../../assets/achtergrond.png';

export default function HomePage({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={Bg} style={styles.backgroundImage}></ImageBackground>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.searchbarText}>Speciaal voor jou</Text>
                    <Search/>
                <FlatListRecepten navigation={navigation}/>
                <FlatListCulinary/>
                <Products/>
                <SupermarktList navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: '45%',
        width: '75%',
        height: '50%',
    },
    searchbarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '10%',
        marginTop: '10%',
    },
});
