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
import {useState} from "react";

export default function App() {
    const Stack = createNativeStackNavigator();
    const[isShowSplash, setisShowSplash] = useState(true);
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomePage}
                    />
                    <Stack.Screen
                        name="Product"
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
                </Stack.Navigator>
            </NavigationContainer>
        {isShowSplash ? (<LandingPage/>) : (<HomePage/>)}
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
