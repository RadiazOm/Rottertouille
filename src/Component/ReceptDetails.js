import React from "react";
import {ScrollView, View,Text} from "react-native";
import FlatListRecepten from "./FlatListRecepten";

const ReceptDetails = () => {

    const groceries = [
        {   name: 'Worst',
            price: '€2,00'
        },

        {   name: 'Worst',
            price: '€1,00'
        },

        {   name: 'Ham',
            price: '€2,00'
        },

        {   name: 'Ham',
            price: '€1,00'
        },

        {   name: 'Cheese',
            price: '€2,00'
        },

        {   name: 'Cheese',
            price: '€1,00'
        },

        {   name: 'Potatoes',
            price: '€2,00'
        },

        {   name: 'Potatoes',
            price: '€1,00'
        },

        {   name: 'Total',
            price: '€24,00'
        },
    ];

    return (
        <ScrollView>
            {groceries.map((grocery, index) => {
                return(
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>{grocery.name}</Text>
                    <Text>{grocery.price}</Text>
                </View> )
            })}
        </ScrollView>
    );
};


export default ReceptDetails;