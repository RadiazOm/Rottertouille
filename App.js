import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import receptenTonen from "./src/components/receipe/receptenTonen";
import ReceptDetails from "./src/components/receipe/ReceptDetails";
import AllRecepten from "./src/components/receipe/AllRecepten";
import {StyleSheet, Image} from 'react-native';
import HomePage from "./src/pages/HomePage";
import ProductPage from "./src/pages/ProductPage";
import {useEffect} from "react";
import ShoppingListPage from "./src/pages/ShoppingListPage";
import * as SplashScreen from 'expo-splash-screen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LocationPage from "./src/pages/LocationPage";
import ProfilePage from "./src/pages/ProfilePage";
import HomeScreenNavigator from "./src/components/navigators/HomeScreenNavigator";
import Location from './assets/location.png';
import Home from './assets/home-icon.png';
import ShoppingList from './assets/Shoppingcart.png';
import Profile from './assets/user-icon.png';

SplashScreen.preventAutoHideAsync();
export default function App() {

    const Tab = createBottomTabNavigator();

    // setTimeout(SplashScreen.hideAsync, 2000);
    useEffect(() => {
        setTimeout(()=> {
            SplashScreen.hideAsync();
        }, 2000)
    }, );

    return (
        <>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ tabBarShowLabel:false, headerShown:false}}>
                    <Tab.Screen
                        name="Home"
                        options={{
                            tabBarIcon: ({size, focused, color}) => {
                                return (
                                    <Image style={styles.navigationItem} source={Home}/>
                                )
                            }
                        }}
                        component={HomeScreenNavigator}
                    />
                    <Tab.Screen name={"Location"}
                                options={{
                                    tabBarIcon: ({size, focused, color}) => {
                                        return (
                                            <Image style={styles.navigationItem} source={Location}/>
                                        )
                                    }
                                }}
                                component={LocationPage}
                    />
                    <Tab.Screen
                        name={"ShoppingList"}
                        options={{
                            tabBarIcon: ({size, focused, color}) => {
                                return (
                                    <Image style={styles.navigationItem} source={ShoppingList}/>
                                )
                            }
                        }}
                        component={ShoppingListPage} />
                    <Tab.Screen
                        name={"Profile"}
                        options={{
                            tabBarIcon: ({size, focused, color}) => {
                                return (
                                    <Image style={styles.navigationItem} source={Profile}/>
                                )
                            }
                        }}
                        component={ProfilePage} />
                </Tab.Navigator>
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
    navigationItem: {
        width:35,
        height:35
    }
});