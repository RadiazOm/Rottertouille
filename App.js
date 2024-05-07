import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "./src/pages/HomePage";
import ProductPage from "./src/pages/ProductPage";

export default function App() {
    const Stack = createNativeStackNavigator()
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
                    </Stack.Navigator>
                </NavigationContainer>

                {/*<Text>Open up App.js to start working on your app !</Text>*/}
                {/*  <Text>Hello world</Text>*/}
                {/*<StatusBar style="auto"/>*/}
        </>
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
