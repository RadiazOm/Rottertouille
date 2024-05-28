import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import receptenTonen from "./src/components/receipe/receptenTonen";
import ReceptDetails from "./src/components/receipe/ReceptDetails";
import AllRecepten from "./src/components/receipe/AllRecepten";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import HomePage from "./src/pages/HomePage";
import ProductPage from "./src/pages/ProductPage";
import {useCallback, useEffect, useState} from "react";
import ShoppingListPage from "./src/pages/ShoppingListPage";
import * as SplashScreen from 'expo-splash-screen';
import Navbar from "./src/components/common/navbar/Navbar";

SplashScreen.preventAutoHideAsync();
export default function App() {

    const Stack = createNativeStackNavigator();

    // setTimeout(SplashScreen.hideAsync, 2000);
    useEffect(() => {
        setTimeout(()=> {
            SplashScreen.hideAsync();
        }, 1000)
    }, );

    return (
        <>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:true}}>
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
        </>
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
