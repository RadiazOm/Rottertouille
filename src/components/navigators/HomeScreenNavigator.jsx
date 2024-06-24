import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProductPage from "../../pages/ProductPage";
import AllRecepten from "../receipe/AllRecepten";
import HomePage from "../../pages/HomePage";
import {createStackNavigator} from "@react-navigation/stack";
import ReceptDetails from "../receipe/ReceptDetails";
import InstructionRecipe from "../receipe/InstructionRecipe";


const HomeScreenNavigator = () => {

    const Stack = createStackNavigator();

    return (
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomePage}/>
                <Stack.Screen name={"SupermarketProducts"} component={ProductPage}/>
                <Stack.Screen name={"ReceptenDetail"} component={ReceptDetails}/>
                <Stack.Screen name={"AllRecepten"} component={AllRecepten}/>
                <Stack.Screen name={'InstructionRecipe'} component={InstructionRecipe}/>
            </Stack.Navigator>
    )
}

export default HomeScreenNavigator;