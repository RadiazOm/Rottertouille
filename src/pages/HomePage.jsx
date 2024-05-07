import SupermarktList from "../components/supermarketlist/SupermarktList";
import {Text, View} from "react-native";

export default function HomePage ({navigation}) {

    return(
        <>
            <View>
                <SupermarktList navigation={navigation}/>
            </View>
        </>
    )
}