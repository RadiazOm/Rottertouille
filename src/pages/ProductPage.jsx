import {Modal, Text, TextInput, View, FlatList, Image} from "react-native";
import ProductList from "../components/productlist/ProductList";
import React from "react";
import img from "../../assets/recepten.jpeg";


function ProductPage ({route, navigation}) {
    const item = route.params.title


    const productsDATA = {
        lidl: [
            {
                id: '1',
                title: 'P',
                img: img
            },
            {
                id: '2',
                title: 'Burger',
                img: img

            },
            {
                id: '3',
                title: 'Risotto',
                img: img

            }
        ],

        dirk: [
            {
                id: '1',
                title: 'Pizza',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '2',
                title: 'Burger',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '3',
                title: 'Risotto',
                img: require('../../assets/recepten.jpeg')
            }
        ],
        plus: [
            {
                id: '1',
                title: 'Pizza',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '2',
                title: 'Burger',
                img: require('../../assets/recepten.jpeg')
            },
            {
                id: '3',
                title: 'Risotto',
                img: require('../../assets/recepten.jpeg')

            }
        ],
        jumbo: [
            {
                id: '1',
                title: 'Pizza',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '2',
                title: 'Burger',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '3',
                title: 'Risotto',
                img: require('../../assets/recepten.jpeg')

            }
        ],

        albertHeijn: [
            {
                id: '1',
                title: 'Pizza',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '2',
                title: 'Burger',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '3',
                title: 'Risotto',
                img: require('../../assets/recepten.jpeg')

            }
        ],

        spar: [
            {
                id: '1',
                title: 'Pizza',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '2',
                title: 'Burger',
                img: require('../../assets/recepten.jpeg')

            },
            {
                id: '3',
                title: 'Risotto',
                img: require('../../assets/recepten.jpeg')

            }
        ]
    };

    const products = productsDATA[item.toLowerCase()];

    return (
        <>
            <View>
                <View className={" h-36 w-40 ml-7 mt-10"}>
                    <Text className={"font-bold w-full"}>Zoeken naar product</Text>
                    <TextInput
                        className={"border-primaryColor rounded-[100px] border-2 mt-2 w-60 h-10 pl-5 bg-white"}>product...</TextInput>
                    <Text className={"font-bold mt-5 text-xl w-full"}>Producten van {item} </Text>
                    <FlatList
                        data={products}
                        style={{marginTop: 10, width: '100%', height: '100%'}}
                        numColumns={3}
                        renderItem={({item}) => (
                            <View style={{flex: 1, margin: 1}}>
                                <Image source={item.img} style={{width: 50, height: 50}}/>
                                <Text>{item.title}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </>
    );
}

export default ProductPage;