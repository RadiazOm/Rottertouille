import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import ProductList from "../components/productlist/ProductList";
import { useEffect, useState } from "react";

function ProductPage({ route, navigation }) {
    const item = route.params.title;
    const id = route.params.id;
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [isFilterd, setIsFiltered] = useState(false);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [productData, setProductData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://89.33.85.29:1068/products/");
                const json = await response.json();
                setProducts(json);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    useEffect(() => {
        if (products !== null) {
            if (products.length == 0) {
                console.log("Product is zero");
                return;
            } else {
                setProductData(products.products.map((item) => item));
            }
        }
    }, [products]);

    const handleChange = async (text) => {
        setInputValue(text);

        if (text === "") {
            setShowDropdown(false);
            setIsFiltered(false);
            setCurrentProducts([]);
            return;
        }

        setShowDropdown(true);
        setIsFiltered(true);

        try {
            const response = await fetch("http://89.33.85.29:1068/products/search/" + id, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": text
                })
            });
            const data = await response.json();
            setCurrentProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <View>
                <View className={" h-36 w-40 ml-7 mt-10"}>
                    <Text className={"font-bold w-full"}>Zoeken naar product</Text>
                    <TextInput
                        onChangeText={handleChange}
                        className={"border-primaryColor rounded-[100px] border-2 mt-2 w-60 h-10 pl-5 bg-white"}></TextInput>
                    {showDropdown && (
                        <View style={styles.Dropdown}>
                            <FlatList
                                data={isFilterd ? currentProducts : productData}
                                numColumns={1}
                                horizontal={false}
                                renderItem={({ item }) => (
                                    <TouchableHighlight onPress={() => setFilteredProducts([item])}>
                                        <View>
                                            <Text style={styles.DropdownContent}>{item.name}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )}
                            />
                        </View>
                    )}
                    <Text className={"font-bold mt-5 text-xl w-full"}>Producten van {item} </Text>
                    <ProductList isFilterd={isFilterd} filterdProducts={filteredProducts} navigation={navigation} id={id} title={item} />
                </View>
            </View>
        </>
    );
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
});
