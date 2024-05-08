import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableOpacity, Image} from "react-native";
import Search from "./Search";
import image from '../../assets/recepten.jpeg';

const receptenData = [
    {
        id: 1,
        title: "Pannenkoek",
        img: image
    },
    {
        id: 2,
        title: "Pancake",
        img: image
    },
    {
        id: 3,
        title: "Rijst",
        img: image
    },
    {
        id: 4,
        title: "Pizza",
        img: image
    },
    {
        id: 5,
        title: "Fried Chicken",
        img: image
    },

    {
        id: 6,
        title: "Fried Chicken",
        img: image
    },

    {
        id: 7,
        title: "Fried Chicken",
        img: image
    },

    {
        id: 8,
        title: "Fried Chicken",
        img: image
    },

    {
        id: 9,
        title: "Fried Chicken",
        img: image
    },

    {
        id: 10,
        title: "Fried Chicken",
        img: image
    },
];

const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <Image style={styles.image} source={item.img}/>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const AllRecepten = () => {
    const [selectedId, setSelectedId] = useState();

    const renderPair = (startIdx) => {
        return (
            <View style={styles.pairContainer}>
                <Item item={receptenData[startIdx]} onPress={() => setSelectedId(receptenData[startIdx].id)}/>
                {receptenData[startIdx + 1] && (
                    <Item item={receptenData[startIdx + 1]}
                          onPress={() => setSelectedId(receptenData[startIdx + 1].id)}/>                    // hulp van chatgpt gevraagd niet boos worden jeffrey
                )}
            </View>
        );
    };

    const renderItem = () => {
        return (
            <FlatList

                data={Array(Math.ceil(receptenData.length / 2)).fill().map((_, index) => index * 2)}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => renderPair(item)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {renderItem()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 20,
    },
    itemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '20%'
    },
    pairContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    item: {
        padding: 20,
        marginVertical: 7,
        marginHorizontal: 14,
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        textAlign: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },

    searchbar: {
        margin: 15
    }
});

export default AllRecepten;
