import {Text, View, StyleSheet, FlatList, TouchableHighlight} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";


function ShoppingListPage({navigation}) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            await AsyncStorage.getItem("products")
                .then(stringifiedProducts => {
                    const parsedProducts = JSON.parse(stringifiedProducts);

                    if (!parsedProducts || typeof parsedProducts !== 'object') return;

                    setProducts(parsedProducts);
                })
        }

        loadProducts();
    }, []);
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