import React, {useState} from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image, Text, View
} from "react-native";


const DATA = [
    {
        id: '1',
        culinary: 'Vegetarisch'
    },

    {
        id: '2',
        culinary: 'Aziatisch'
    },

    {
        id: '3',
        culinary: 'Westers'
    },

    {
        id: '4',
        culinary: 'Turks'
    },

    {
        id: '5',
        culinary: 'Grieks'
    },

    {
        id: '6',
        culinary: 'Indiaans'
    },

    {
        id: '7',
        culinary: 'Hollands'
    },
];


const Item = ({item, onPress,}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text>{item.culinary}</Text>
    </TouchableOpacity>
);

const FlatListCulinary = () => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal={true}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    item: {
        padding: 2,
        marginVertical: 2,
        marginHorizontal: 8,
        marginLeft: 7,
        marginBottom:20
    }
})

export default FlatListCulinary;