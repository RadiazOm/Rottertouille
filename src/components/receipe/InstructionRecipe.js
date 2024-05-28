import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const InstructionRecipe = () => {
    const route = useRoute();
    const item = route.params.item;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item.img} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.instructionsContainer}>
                        {item.instructions.map((instruction, index) => (
                            <View key={index} style={styles.instruction}>
                                <Text style={styles.instructionText}>
                                    {index + 1}. {instruction}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    image: {
        width: "90%",
        height: 250,
        borderRadius: 10,
    },
    contentContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    instructionsContainer: {
        marginTop: 20,
    },
    instruction: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#f2f2f2",
    },
    instructionText: {
        fontSize: 16,
    },
});

export default InstructionRecipe;