import {Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "../components/common/navbar/Navbar";


function ShoppingListPage({navigation}) {
    AsyncStorage.getItem('products', (err, result) => {
        console.log(result);
    })
    return (
        <>
            <View>
                <Text> Shopping List</Text>
            </View>
        </>
    )
}

export default ShoppingListPage;