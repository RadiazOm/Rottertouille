import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableOpacity, Image} from "react-native";
import Search from "../common/search/Search";
import image from '../../../assets/recepten.jpeg';

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

    const renderItem = ({item}) => (
        <Item item={item} onPress={() => setSelectedId(item.id)}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Search style={styles.searchbar}/>
            <FlatList style={styles.flatList}
                      data={receptenData}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={renderItem}
                      numColumns={2}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    itemContainer: {
        flex: 1,
        marginBottom:20,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
    },
    title: {
        fontSize: 16,
        marginTop: 5,
        textAlign: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    searchbar: {
        margin: 15,
    },

    flatList: {
        marginTop: 70,
        margin:10
    }
});

export default AllRecepten;
