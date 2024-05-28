import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import receptenTonen from "./src/components/receipe/receptenTonen";
import ReceptDetails from "./src/components/receipe/ReceptDetails";
import AllRecepten from "./src/components/receipe/AllRecepten";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import HomePage from "./src/pages/HomePage";
import ProductPage from "./src/pages/ProductPage";
import LandingPage from "./src/pages/LandingPage";
import {useEffect, useState} from "react";
import ShoppingListPage from "./src/pages/ShoppingListPage";
import Navbar from "./src/components/common/navbar/Navbar";

export default function App() {
    const Stack = createNativeStackNavigator();
    const[isShowSplash, setisShowSplash] = useState(true);

    useEffect(() => {
      setTimeout(() => {
          setisShowSplash(false);
      }, 3000);
    });


    console.log(isShowSplash)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isShowSplash ? 'LandingPage' : 'Home'} screenOptions={{headerShown:false}}>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                />
                <Stack.Screen
                    name="SupermarketProducts"
                    component={ProductPage}

                />

                <Stack.Screen
                    name={'Recepten'}
                    component={receptenTonen}
                    headerShown={false}
                />

                <Stack.Screen
                    name={'LandingPage'}
                    component={LandingPage}
                    headerShown={true}
                />

                <Stack.Screen
                    name={'ReceptenDetail'}
                    component={ReceptDetails}

                />
                <Stack.Screen
                    name={'AllRecepten'}
                    component={AllRecepten}
                />
                <Stack.Screen
                    name={"ShoppingList"}
                    component={ShoppingListPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
