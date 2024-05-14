import {View, StyleSheet,Text} from "react-native";



const Test = () => {

    return(
        <View style={styles.container}>
            <Text>Hello World!</Text>
        </View>
    )

}

export default Test


 const styles = StyleSheet.create({
     container: {
         backgroundColor: "red",
     }
 })