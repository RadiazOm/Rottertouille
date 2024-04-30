import React from "react";
import {ScrollView, View, Text, Image, StyleSheet, Button, Pressable, Alert} from "react-native";
import image from '../../assets/recepten.jpeg';
import FlatListRecepten from "./FlatListRecepten";


const ReceptDetails = () => {

    const groceries = [
        {   name: 'Worst',
            price: '€2,00',
            price2: '€1,00'
        },

        {   name: 'Ham',
            price: '€2,00',
            price2: '€1,00'
        },

        {   name: 'Cheese',
            price: '€2,00',
            price2: '€1,00'
        },

        {   name: 'Potatoes',
            price: '€2,00',
            price2: '€1,00'
        },

        {   name: 'Total',
            price: '€8,00',
            price2: '€4,00'
        },
    ];
    return (
        <ScrollView>
            <Image source={image} style={styles.receiptImage} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Recept lijst</Text>
                {/* Edit button */}
            </View>
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
            <View style={styles.buttonContainer}>
            <Button style={styles.button1}
                onPress={() => {
                    console.log('You tapped the button!');
                }}
                title="Instructies"
            />
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button2}
                        onPress={() => {
                            console.log('You tapped the button!');
                        }}
                        title="Voeg toe aan lijst"
                />
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
        fontSize: 18,
        fontWeight: "bold",
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
    },
    groceryName: {
        fontWeight: "bold",
    },
    priceContainer: {
        flexDirection: "column",
        alignItems: "center",
        padding: 3
    },
    oldPrice: {
        textDecorationLine: "line-through",
        color: "gray",
        marginRight: 5,
        marginBottom: 6
    },
    newPrice: {
        fontWeight: "bold",

    },

    buttonContainer: {
        marginTop: 20,
        marginLeft: '23%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor:  '#F16060',
        borderRadius: 20,
        width: 200,
    },

    button1: {
        color: 'white'
    },

    button2: {

    }
});

export default ReceptDetails;