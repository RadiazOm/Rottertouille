import {StatusBar, StyleSheet, Text, View} from "react-native";
import Search from "./Search";
import FlatListRecepten from "./FlatListRecepten";
import FlatListCulinary from "./FlatListCulinary";


const ReceptenTonen = ({navigation}) => {


    return (
        <View style={styles.container}>
            <View>
                <Search/>

                <FlatListCulinary/>
                <StatusBar style="auto"/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default ReceptenTonen
