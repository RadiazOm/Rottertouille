import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar, Button, Image, TouchableHighlight, SectionList,
    Linking
} from 'react-native';
import Supermarkt from "./Supermarkt";



const SuperMarktList = ({navigation}) => {

    const [displayFilter, setDisplayFilter] = useState(false);

    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const response = fetch("http://89.33.85.29:1068/supermarkets"
            )
                .then(response => response.json())
                .then(data => {
                    setData(data.supermarkets)
                }).catch((error) => (console.log(error)))
        };
        fetchData()
    }, []);

    const supermarkets = data.map((x) => (x));
    console.log(supermarkets);


    function toggleDropDown() {
        setDisplayFilter(!displayFilter);
    }


    return (
        <SafeAreaView>
            <View className={"pl-3 pr-8 flex flex-row"}>
                <View className={"flex-1"}>
                    <Text style={styles.supermarktTitle}>Supermarkt</Text>
                </View>
            </View>
            <FlatList className={"mt-3"}
                      data={supermarkets}
                      horizontal={true}
                      renderItem={({item}) => <TouchableHighlight
                                                                  onPress={() => navigation.navigate('SupermarketProducts', {title: item.name, img:item.image_url})}><Supermarkt
                          img={item.image_url}/></TouchableHighlight>}
                      keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    supermarktTitle: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    }
})
export default SuperMarktList;