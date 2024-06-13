import React from "react";
import {ScrollView, View, Text, Image, StyleSheet, Button, Pressable, Alert} from "react-native";
import image from '../../../assets/recepten.jpeg';



const ReceptDetails = ({navigate}) => {

    const groceries = [
        {
            name: 'Worst',
            price: '€2,00',
            price2: '€1,00'
        },

        {
            name: 'Ham',
            price: '€2,00',
            price2: '€1,00'
        },

        {
            name: 'Cheese',
            price: '€2,00',
            price2: '€1,00'
        },

        {
            name: 'Potatoes',
            price: '€2,00',
            price2: '€1,00'
        },

        {
            name: 'Total',
            price: '€8,00',
            price2: '€4,00'
        },
    ];
    return (
        <ScrollView style={styles.background}>
            <Image source={image} style={styles.receiptImage} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Recept lijst</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.groceryList}>
                {groceries.map((grocery, index) => (
                    <View key={index} style={styles.groceryItem}>
                        <Text style={styles.groceryName}>{grocery.name}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.oldPrice}>{grocery.price}</Text>
                            <Text style={styles.newPrice}>{grocery.price2}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.divider} />
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button1}
                    onPress={() => navigation.navigate('InstructionRecipe')} // Navigate to the instructions page
                >
                    <Text style={styles.buttonText1}>Instructies</Text>
                </Pressable>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button2}
                    onPress={() => {
                        console.log('You tapped the button!');
                    }}
                >
                    <Text style={styles.buttonText2}>Voeg toe aan lijst</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "gray",
        marginLeft: '10%',
    },
    receiptImage: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    groceryList: {
        padding: 10,
    },
    groceryItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        padding: 5,
    },
    groceryName: {
        fontWeight: "bold",
    },
    priceContainer: {
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
    },
    oldPrice: {
        textDecorationLine: "line-through",
        color: "gray",
        marginRight: 5,
        marginBottom: 6,
    },
    newPrice: {
        fontWeight: "bold",
    },
    divider: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 5,
        width: 300,
        marginLeft: '10%',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 20,
        width: 200,
        alignSelf: 'center',
    },
    button1: {
        backgroundColor: '#F16060',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    button2: {
        backgroundColor: '#4F4F4F',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText1: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonText2: {
        color: '#fff',
        fontWeight: 'bold',
    },
    background: {
        backgroundColor: '#fff',
    },
});

export default ReceptDetails;