import {FlatList, Image, SectionList, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import HomeIcon from '../../../../assets/home-icon.png'
import LocationIcon from '../../../../assets/location.png'
import ShoppingCart from '../../../../assets/Shoppingcart.png';
import ProfileIcon from '../../../../assets/user-icon.png'
import React from "react";
import Product from "../../productlist/Product";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../../../pages/HomePage";
import ProductPage from "../../../pages/ProductPage";
import receptenTonen from "../../receipe/receptenTonen";
import ReceptDetails from "../../receipe/ReceptDetails";
import AllRecepten from "../../receipe/AllRecepten";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Navbar = ({navigation}) => {
    const Stack = createNativeStackNavigator();
    const navigationContent = [
        {
            title: "Home",
            icon: HomeIcon,
            url: 'Home',
        },
        {
            title: "Location",
            icon: LocationIcon,
            url: 'location'
        },
        {
            title: "shoppingList",
            icon: ShoppingCart,
            url: 'ShoppingList'
        },
        {
            title: "profile",
            icon: ProfileIcon,
            url: 'profile'
        }
    ]



    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen
        //             name="Home"
        //             component={HomePage}
        //         />
        //         <Stack.Screen
        //             name="SupermarketProducts"
        //             component={ProductPage}
        //
        //         />
        //
        //         <Stack.Screen
        //             name={'Recepten'}
        //             component={receptenTonen}
        //             headerShown={false}
        //         />
        //
        //         <Stack.Screen
        //             name={'ReceptenDetail'}
        //             component={ReceptDetails}
        //
        //         />
        //         <Stack.Screen
        //             name={'AllRecepten'}
        //             component={AllRecepten}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <>
            <View style={styles.container}>
                {navigationContent.map((navigationItem, index) => <View style={styles.box}><TouchableHighlight onPress={()=>{navigation.navigate(navigationItem.url)}}><Image alt={navigationItem.title} width={100} height={100} source={
                navigationItem.icon
                }/></TouchableHighlight></View>)}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10,
        flexDirection:"row",
        justifyContent: 'space-between', // Align items with space between them
        alignItems: 'center', // Center the items horizontally
        padding: 20,
    },
    imageContent: {
        height:120,
        width:120,
    },
    box: {
        height:75,
        marginBottom:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Navbar;