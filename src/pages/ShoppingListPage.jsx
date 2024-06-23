import {Text, View, StyleSheet, FlatList, TouchableHighlight, ImageBackground, Button, Pressable} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useMemo } from "react";
import HeaderImage from '../../assets/header-shoppinglist.jpg';
import product from "../components/productlist/Product";

function ShoppingListPage({ navigation }) {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState({});

    useEffect(() => {
        const loadProducts = async () => {
            const stringifiedProducts = await AsyncStorage.getItem("products");
            const parsedProducts = JSON.parse(stringifiedProducts);

            if (!parsedProducts || typeof parsedProducts !== 'object') return;

            setProducts(parsedProducts);
            countProductNames(parsedProducts);
        };

        loadProducts();
    }, []);

    const countProductNames = (products) => {
        const counts = products.reduce((acc, product) => {
            acc[product.title] = (acc[product.title] || 0) + 1;
            console.log(acc)
            return acc
        }, {})

        setTotalProducts(counts)
    }

    const renderItem = useMemo(
        () => ({ item }) => (
            <TouchableHighlight>
                <View style={styles.ShoppingList}>
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                    <View>
                        <Text>{totalProducts[item.title]}</Text>
                    </View>
                    <View>
                        <Pressable onPress={() => {alert("hello")}} style={styles.AddButton}><Text style={styles.ButtonText}>+</Text></Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.RemoveButton}><Text style={styles.ButtonText}>-</Text></Pressable>
                    </View>
                    <View>
                        <Text>{item.price}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        ),
        [] // No dependencies, so this memoized function will not change
    );

    return (
        <View style={styles.Container}>
            <ImageBackground source={HeaderImage} style={styles.ShoppingListHeader}>
                <Text style={styles.ShoppingListTitle}>Boodschappenlijst</Text>
            </ImageBackground>
            <View style={styles.ShoppingListDescription}>
                <View><Text style={styles.ShoppingListDescriptionText}>Product</Text></View>
                <View><Text style={styles.ShoppingListDescriptionText}>Aantal</Text></View>
                <View><Text style={styles.ShoppingListDescriptionText}>Prijs</Text></View>
            </View>
            <FlatList style={styles.ShoppingListBackGround}
                className={"mt-3"}
                data={products}
                horizontal={false}
                renderItem={renderItem}
                keyExtractor={item => item.id} // Assuming each product has a unique `id` field
            />
        </View>
    );
}

export default ShoppingListPage;

const styles = StyleSheet.create({
    Container: {
        marginTop:"30%",
    },
    ShoppingListHeader: {
        width: "100%",
        paddingTop:"5%",
        paddingBottom:"5%"
    },
    ShoppingListTitle: {
        fontSize:"30%",
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    },

    ShoppingListDescription: {
        marginRight:"auto",
        paddingTop:"10%",
        width: "60%",
        marginLeft:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },

    ShoppingListDescriptionText: {
      fontWeight:"bold"
    },
    ShoppingListBackGround: {
      marginTop:"0%",
        height:"100%",
    },
    ShoppingList: {
       display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width: "60%",
        marginTop:"10%",
        marginRight:"auto",
        marginLeft:"auto",
    },
    AddButton: {
        backgroundColor:"green",
        paddingRight:"5%",
        paddingLeft:"5%",
        width:"100%"
    },
    RemoveButton:{
        backgroundColor:"red",
        paddingRight:"5%",
        paddingLeft:"5%",
        width:"100%"
    },
    ButtonText: {
        textAlign:"center",
        fontSize:"23%",
        fontWeight:"bold"
    }
});