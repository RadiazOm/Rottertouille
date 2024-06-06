import {FlatList, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import ProductList from "../components/productlist/ProductList";
import {useEffect, useState, useRef} from "react";
import Product from "../components/productlist/Product";
import useFetch from "../hooks/useFetch";

function ProductPage({route, navigation}) {
    const item = route.params.title
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(currentProducts);
    const products = useFetch('http://89.33.85.29:1068/products');
    let productData = products.data.map((item) => item);

    const data = [
        {id: '1', name: 'Apple'},
        {id: '2', name: 'Banana'},
        {id: '3', name: 'Cherry'},
        {id: '4', name: 'Date'},
        {id: '5', name: 'Elderberry'},
        {id: '6', name: 'Fig'},
        {id: '7', name: 'Grape'},
        {id: '8', name: 'Honeydew'}
    ];


    const handleChange = async (text) => {
        setShowDropdown(true)
        setInputValue(text)
        await fetch("http://89.33.85.29:1068/products/search", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "query": inputValue
            })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            setCurrentProducts(data.products);
            showResults(currentProducts);
        })
    };

    function showResults(product) {

        // const data = product.map((x) => console.log(x.name));
        // const newData = data.filter(item => {
        //     const itemData = item.name.toUpperCase();
        //     const textData = inputValue.toUpperCase();
        //     return itemData.indexOf(textData) > -1;
        // });

        // for (let i = 0; i < results.filterEventUser.length; i++) {
        //     console.log("data: " + results.filterEventUser[i].name);
        //     let option = document.createElement("option");
        //     option.textContent = results.filterEventUser[i].name;
        //     datalist.appendChild(option);
        // }
    }


    function scrollToProduct() {
        alert(item.name)
    }

    return (
        <>
            <View>
                <View className={" h-36 w-40 ml-7 mt-10"}>
                    <Text className={"font-bold w-full"}>Zoeken naar product</Text>
                    <TextInput
                        onChangeText={handleChange}
                        className={"border-primaryColor rounded-[100px] border-2 mt-2 w-60 h-10 pl-5 bg-white"}></TextInput>
                    {showDropdown ?
                        <View style={styles.Dropdown}>
                            <FlatList
                                data={productData}
                                numColumns={1}
                                horizontal={false}
                                renderItem={({item}) => <TouchableHighlight onPress={scrollToProduct}
                                                                            className={""}><View><Text
                                    style={styles.DropdownContent}>{item.name}</Text></View></TouchableHighlight>}
                            />
                        </View>
                        : <Text></Text>}
                    <Text>{inputValue}</Text>
                    <Text className={"font-bold mt-5 text-xl w-full"}>Producten van {item} </Text>
                    <ProductList navigation={navigation} title={item}/>
                </View>
            </View>
        </>
    )
}

export default ProductPage;

const styles = StyleSheet.create({
    Dropdown: {
        backgroundColor: "#222831",
        borderRadius: 5,
        marginLeft: 15,
        shadowRadius: 2,
        opacity: 20
    },

    DropdownContent: {
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center"
    }
})