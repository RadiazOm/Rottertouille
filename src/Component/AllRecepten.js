import React from "react";
import {View, Text} from "react-native";
import Search from "./Search";
import image from '../../assets/recepten.jpeg'

const AllRecepten = () => {

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
    ]

    return (
        <View>
            <Search/>

        </View>
    )
}



export default AllRecepten;