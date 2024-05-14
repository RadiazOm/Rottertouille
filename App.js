import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import receptenTonen from "./src/Component/receptenTonen";
import ReceptDetails from "./src/Component/ReceptDetails";
import AllRecepten from "./src/Component/AllRecepten";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "./src/pages/HomePage";
import ProductPage from "./src/pages/ProductPage";

export default function App() {
    return (

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
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
