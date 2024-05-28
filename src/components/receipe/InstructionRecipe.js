import {Image, Text, View, StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

function InstructionRecipe() {
    const route = useRoute()
    const {itemID, imageId, instructionId} = route.params
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} resizeMode={'cover'} source={imageId}/>
            </View>
            <Text style={styles.h1}>Voorbereiding</Text>
            <Text style={styles.instructions}> {instructionId} </Text>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    header: {
        maxWidth: '100%',
        maxHeight: '35%'
    },

    image: {
        alignSelf: 'center',
        height: '100%',
        width: '100%'
    },

    h1: {
        textAlign: 'center',
        margin: 30,
        fontSize: 30
    },

    instructions: {
        textAlign: 'center',
        marginTop: '10%'
    },
})

export default InstructionRecipe