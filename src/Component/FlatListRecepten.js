import React, {useState} from 'react';
import receptenImage from '../../assets/recepten.jpeg'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image, Text, View
} from 'react-native';






const FlatListRecepten = ({navigation}) => {

    const DATA = [
        {
            id: '1',
            title: 'Spaghetti',
            img:receptenImage
        },
        {
            id: '2',
            title: 'Paella',
            img:receptenImage
        },
        {
            id: '3',
            title: 'Gambas pil pil',
            img:receptenImage
        },
        {
            id: '4',
            title: 'Hollands Stamp pot',
            img:receptenImage
        },
        {
            id: '5',
            title: 'Pannekoek',
            img:receptenImage
        },
        {
            id: '6',
            title: 'Doner Kebab',
            img:receptenImage
        },
        {
            id: '7',
            title: 'Pasta Carbonade',
            img:receptenImage
        },
    ];


    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        return (
            <View>
            <Item
                item={item}
                onPress={() =>
                    navigation.navigate('ReceptenDetail')
                }
            />
            </View>
        );
    };

    const Item = ({item, onPress, backgroundColor,}) => {
        return(
        <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
            <Image
                style={styles.image}
                source={item.img}
            />
        </TouchableOpacity>
        )};



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header} >
                <Text>Recepten</Text>
            </View>
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
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 4,
    },


    image:{
        width: 150,
        height: 150,
        borderRadius: 10
    },

    header:{
        marginLeft:15,
    }

});

export default FlatListRecepten;