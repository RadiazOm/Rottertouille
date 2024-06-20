// supermarktList.jsx

import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';
import Supermarkt from './Supermarkt';

const SuperMarktList = ({ navigation }) => {
    const [displayFilter, setDisplayFilter] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://89.33.85.29:1068/supermarkets");
                const json = await response.json();
                setData(json.supermarkets);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const supermarkets = data.map((x) => x);

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
            <FlatList
                className={"mt-3"}
                data={supermarkets}
                horizontal={true}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => navigation.navigate('SupermarketProducts', { title: item.name, img: item.image_url })}
                    >
                        <View>
                            <Supermarkt img={item.image_url} />
                        </View>
                    </TouchableHighlight>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    supermarktTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
});

export default SuperMarktList;
