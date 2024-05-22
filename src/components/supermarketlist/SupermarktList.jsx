import React, {useState} from 'react';
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
// import useFetch from "../../hooks/useFetch";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Lidl',
        img: require('../../../assets/Lidl-Logo.svg.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Dirk',
        img: require('../../../assets/dirk-logo.png')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Plus',
        img: require('../../../assets/plus-logo.png')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d80',
        title: 'Jumbo',
        img: require('../../../assets/Jumbo_Logo.svg.png')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Albert Heijn',
        img: require('../../../assets/Albert_Heijn_Logo.svg')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: 'Spar',
        img: require('../../../assets/spar-logo.png')
    }
];

const filterOptions = [
    {
        title: 'Alfabetische volgorde',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];

const SuperMarktList = ({navigation}) => {

    const [displayFilter, setDisplayFilter] = useState(false);


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
            <View className={"pl-3 pr-8 flex content-between flex-row"}>
                <View className={"flex-1"}>
                    <Text style={styles.supermarktTitle}>Supermarkt</Text>
                </View>
            </View>
            <FlatList className={"mt-3"}
                      data={DATA}
                      horizontal={true}
                      renderItem={({item}) => <TouchableHighlight className={""}
                                                                  onPress={() => navigation.navigate('Product')}><Supermarkt
                          img={item.img}/></TouchableHighlight>}
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