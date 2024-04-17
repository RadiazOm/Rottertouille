import {StatusBar, StyleSheet, Text, View} from "react-native";
import Search from "./Search";
import FlatListRecepten from "./FlatListRecepten";
import  FlatListCulinary from "./FlatListCulinary";
import ReceptDetails from "./ReceptDetails";
const ReceptenTonen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
            <Search/>
            <FlatListRecepten navigation={navigation}/>
            <FlatListCulinary/>
            {/*<ReceptDetails/>*/}
            <StatusBar style="auto" />
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
