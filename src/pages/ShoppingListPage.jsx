import { Text, View, StyleSheet, FlatList, TouchableHighlight, ImageBackground, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useMemo, useCallback } from "react";
import HeaderImage from '../../assets/header-shoppinglist.jpg';
import { useFocusEffect } from "@react-navigation/native";

function ShoppingListPage({ navigation }) {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState({});
    const [duplicateProducts, setDuplicateProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useFocusEffect(
        useCallback(() => {
            const loadProducts = async () => {
                const stringifiedProducts = await AsyncStorage.getItem("products");
                const parsedProducts = JSON.parse(stringifiedProducts);
                if (!parsedProducts || !Array.isArray(parsedProducts)) return;

                setProducts(parsedProducts);
                countProductNames(parsedProducts);
            };

            loadProducts();

            return () => {
                console.log('Screen is unfocused');
            };
        }, [])
    );

    const removeList = async () => {
        try {
            await AsyncStorage.removeItem("products");
            setProducts([]);
            setDuplicateProducts([]);
            setTotalProducts({});
            setTotalPrice(0);
        } catch (exception) {
            console.log(exception);
        }
    }

    const removeItem = async (item) => {
        try {
            let updatedProducts = [...products];
            const index = updatedProducts.findIndex(product => product.id === item.id);

            if (index !== -1) {
                updatedProducts.splice(index, 1);
                await AsyncStorage.setItem("products", JSON.stringify(updatedProducts));
                setProducts(updatedProducts);
                countProductNames(updatedProducts);
            }
        } catch (exception) {
            console.log(exception);
        }
    }

    const addItem = async (item) => {
        try {
            const updatedProducts = [...products, { ...item }];
            await AsyncStorage.setItem("products", JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
            countProductNames(updatedProducts);
        } catch (exception) {
            console.log(exception);
        }
    }

    const countProductNames = (products) => {
        const counts = products.reduce((acc, product) => {
            acc[product.title] = (acc[product.title] || 0) + 1;
            return acc;
        }, {});

        setTotalProducts(counts);

        const duplicates = products.filter((product, index, self) =>
            counts[product.title] > 0 && self.findIndex(p => p.title === product.title) === index
        );

        setDuplicateProducts(duplicates);

        const total = products.reduce((sum, product) => {
            return sum + product.price;
        }, 0);

        setTotalPrice(total);
    }

    const renderItem = useMemo(
        () => ({ item }) => (
            <TouchableHighlight>
                <View style={styles.ShoppingList}>
                    <View style={styles.ProductColumn}>
                        <Text>{item.title}</Text>
                    </View>
                    <View style={styles.CountColumn}>
                        <Text>{totalProducts[item.title]}</Text>
                    </View>
                    <View style={styles.ButtonColumn}>
                        <Pressable onPress={() => addItem(item)} style={styles.AddButton}><Text style={styles.ButtonText}>+</Text></Pressable>
                        <Pressable onPress={() => removeItem(item)} style={styles.RemoveButton}><Text style={styles.ButtonText}>-</Text></Pressable>
                    </View>
                    <View style={styles.PriceColumn}>
                        <Text>{(totalProducts[item.title] * item.price).toFixed(2)} €</Text>
                    </View>
                </View>
            </TouchableHighlight>
        ),
        [totalProducts]
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
                      data={duplicateProducts}
                      horizontal={false}
                      renderItem={renderItem}
            />
            <View style={styles.TotalPriceContainer}>
                <Text style={styles.TotalPriceText}>Totale prijs: {totalPrice.toFixed(2)} €</Text>
            </View>
            <Pressable style={styles.deleteShoppingList} onPress={removeList}>
                <Text style={styles.deleteShoppingListText}>Verwijder lijst</Text>
            </Pressable>
        </View>
    );
}

export default ShoppingListPage;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: "10%",
        padding: 10,
        backgroundColor: "#f8f8f8"
    },
    ShoppingListHeader: {
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    ShoppingListTitle: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    ShoppingListDescription: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    ShoppingListDescriptionText: {
        fontWeight: "bold",
        fontSize: 18
    },
    ShoppingListBackGround: {
        flex: 1,
    },
    ShoppingList: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "white",
        marginVertical: 5,
        borderRadius: 5,
        alignItems: "center",
    },
    ProductColumn: {
        flex: 2,
        justifyContent: "center",
    },
    CountColumn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ButtonColumn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    PriceColumn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    AddButton: {
        backgroundColor: "green",
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 2,
    },
    RemoveButton: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 2,
    },
    ButtonText: {
        color: "white",
        fontWeight: "bold",
    },
    deleteShoppingList: {
        backgroundColor: '#F16060',
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    deleteShoppingListText: {
        color: "white",
        fontWeight: "bold",
    },
    TotalPriceContainer: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    TotalPriceText: {
        fontWeight: "bold",
        fontSize: 18,
    }
});