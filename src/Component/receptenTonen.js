import {StatusBar, StyleSheet, Text, View} from "react-native";
import Search from "./Search";
import FlatListRecepten from "./FlatListRecepten";

const ReceptenTonen = () => {
    return(
        <View style={styles.container}>
            <Search/>
            <Text>Hier de recepten tonen</Text>
            <FlatListRecepten/>
            <StatusBar style="auto" />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: "60%"
    },
});

export default ReceptenTonen
