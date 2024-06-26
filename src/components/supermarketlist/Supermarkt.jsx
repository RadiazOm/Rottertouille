import {Image, Text, View,StyleSheet} from "react-native";

const Supermarkt = ({img}) => {

    return (
        <View  style={styles.container} >
            <View style={styles.imageContainer}>
                <Image source={{uri: "http://89.33.85.29:1068/image/" + img}} style={styles.image} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container:{
        margin:6,
    },

    imageContainer:{
        marginLeft:7,
        borderRadius: 10,
        width: 135,
        height: 135,
    },

    image:{
        width: 135,
        height: 135,
        borderRadius: 10,

    }
})

export default Supermarkt;