
import {Text, View, StyleSheet, FlatList, TouchableHighlight} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "../components/common/navbar/Navbar";
import {useEffect, useState} from "react";
import Supermarkt from "../components/supermarketlist/Supermarkt";


function ShoppingListPage({navigation}) {

    const [products, setProducts] = useState([])
    const [showProduct, setShowProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            await AsyncStorage.getItem("products")
                .then(stringifiedProducts => {
                    const parsedProducts = JSON.parse(stringifiedProducts);

                    if (!parsedProducts || typeof parsedProducts !== 'object') return;

                    setProducts(parsedProducts);
                    console.log(products);
                    // setShowProducts(productListDetails);
                })
        }

        loadProducts();
    }, []);
    AsyncStorage.getItem('products', (err, result) => {
        console.log(result);
    })
    return (
        <>
            <View style={styles.Container}>
                <FlatList className={"mt-3"}
                          data={products}
                          horizontal={false}
                          renderItem={({item}) => <TouchableHighlight
                              className={""}><View><Text>{item.title}</Text></View>
                          </TouchableHighlight>}
                />
            </View>
        </>
    )
}

export default ShoppingListPage;

const styles = StyleSheet.create({
    Container: {
        flex: 2,
        marginRight: "auto",
        marginLeft: "auto",
    }
})