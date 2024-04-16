import React, {useState} from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Spaghetti',
    },
    {
        id: '2',
        title: 'Paella',
    },
    {
        id: '3',
        title: 'Gambas pil pil',
    },
    {
        id: '4',
        title: 'Hollands Stamp pot',
    },
    {
        id: '5',
        title: 'Pannekoek',
    },
    {
        id: '6',
        title: 'Doner Kebab',
    },
    {
        id: '7',
        title: 'Pasta Carbonade',
    },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
);

const App = () => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
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
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        height: '50%',
        width: "auto"
    },
    title: {
        fontSize: 32,
        marginTop: 25
    },

});

export default App;