import SupermarktList from "../components/supermarketlist/SupermarktList";
import {View, Text, Button} from "react-native";



function HomePage({ navigation }) {
    return (
        <View>
            <Text>hello there this is the home page</Text>
            <Button
                title="Go to profile"
                onPress={() =>
                    navigation.navigate('Profile')
                }
            />
            <SupermarktList/>
        </View>
    )
}

export default HomePage