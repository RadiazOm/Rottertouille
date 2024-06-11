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
// import {Picker} from "@react-native-picker/picker";
import Lidl from '../../../assets/Lidl-Logo.svg.png'
import Jumbo from '../../../assets/Jumbo_Logo.svg.png'
import Filter from '../../../assets/filter.png';
import Supermarkt from "./Supermarkt";
import useFetch from "../../hooks/useFetch";


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

    // function navigateUrl() {
    //   navigation.navigate('Product')
    // }

    // function renderDropdown() {
    //     if (displayFilter) {
    //         return (
    //             <View className={"bg-white divide-y divide-gray-100 rounded-lg h-40 mt-4 shadow w-44 dark:bg-gray-700"}>
    //                 <SectionList
    //                     sections={filterOptions}
    //                     keyExtractor={(item, index) => item + index}
    //                     renderItem={({item}) => (
    //                         <View>
    //                             <Text>{item}</Text>
    //                         </View>
    //                     )}
    //                     renderSectionHeader={({section: {title}}) => (
    //                         <Text className={"font-bold"}>{title}</Text>
    //                     )}
    //                 />
    //             </View>
    //         )
    //     }
    // }

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