import React, {useState} from 'react';
import receptenImage from '../../../assets/recepten.jpeg'
import moreButton from '../../../assets/morebutton.png'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image, Text, View
} from 'react-native';


function FlatListRecepten({navigation})  {

    const DATA = [
        {
            id: '1',
            title: 'Spaghetti',
            img: receptenImage
        },
        {
            id: '2',
            title: 'Paella',
            img: receptenImage
        },
        {
            id: '3',
            title: 'Gambas pil pil',
            img: receptenImage
        },
        {
            id: '4',
            title: 'Hollands Stamp pot',
            img: receptenImage
        },
        {
            id: '5',
            title: 'Pannekoek',
            img: receptenImage
        },
        {
            id: '6',
            title: 'Doner Kebab',
            img: receptenImage
        },
        {
            id: '7',
            title: 'Pasta Carbonade',
            img: receptenImage
        },
        {
            id: '8',
            title: 'More',
            img: moreButton
        }
    ];


    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const navigateToDetail = () => {
            if (item.id !== '8') {
                navigation.navigate('ReceptenDetail', {itemId: item.id});
            } else {
                navigation.navigate('AllRecepten'); // Navigate to a different component for "More"
            }
        };
        return (
            <View>
                <Item item={item} onPress={navigateToDetail}/>
            </View>
        );
    };

    const Item = ({item, onPress, backgroundColor,}) => {
        return (
            <View>
            <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
                <Image
                    style={styles.image}
                    source={item.img}
                />
            </TouchableOpacity>
            </View>
        )
    };


    return (
        <SafeAreaView className={"flex flex-col bg-red-200"}>
            <View style={styles.header}>
                <Text style={styles.Recepten}>Recepten</Text>
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
        marginTop: StatusBar.currentHeight || 10,

    },

    Recepten:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },

    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 1,
    },


    image: {
        width: 135,
        height: 135,
        borderRadius: 10
    },

    header: {
        marginLeft: 15,
        marginTop:20
    }

});

export default FlatListRecepten;