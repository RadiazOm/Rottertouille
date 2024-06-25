import {FlatList, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import ProductList from "../components/productlist/ProductList";
import {useEffect, useState} from "react";

function ProductPage({route, navigation}) {
    const item = route.params.title;
    const id = route.params.id;
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [isFilterd, setIsFiltered] = useState(false);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [productData, setProductData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState(null);
    let timeoutref;

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
            if (products.length === 0) {
                console.log("Product is zero");
                return;
            } else {
                setProductData(products.products.map((item) => item));
            }
        }
    }, [products]);

    const handleChange = async (text) => {
        clearTimeout(timeoutref)
        timeoutref = setTimeout(async () => {
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
        }, 1000)

    };

    return (

        <View>
            <View className={" h-36 w-40 ml-7 mt-10"}>
                <View style={styles.centeredView}>
                <TextInput
                    onChangeText={handleChange}
                    style={styles.input}
                    placeholder={"Zoek producten"}
                />
                </View>
                    {showDropdown && (
                    <View style={styles.Dropdown}>
                        <FlatList
                            data={isFilterd ? currentProducts : productData}
                            numColumns={1}
                            horizontal={false}
                            renderItem={({item}) => (
                                <TouchableHighlight onPress={() => setFilteredProducts([item])}>
                                    <View>
                                        <Text style={styles.DropdownContent}>{item.name}</Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                        />
                    </View>
                )}
                <Text className={"font-bold mt-5 text-xl w-full h-20"}>Producten van {item} </Text>
                <ProductList
                    isFilterd={isFilterd} filterdProducts={filteredProducts} navigation={navigation} id={id}
                    title={item}/>
            </View>
        </View>

    );
}

export default ProductPage;

const styles = StyleSheet.create({
    Dropdown: {
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'#F16060',
        marginLeft: '30%',
        marginTop: 15,
        shadowRadius: 2,
        opacity: 20,
        height: 200,
        width: 240,
    },
    DropdownContent: {
        color: "#000",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center"
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        borderRadius: 50,
        marginTop: 2,
        marginBottom: 10,
        marginLeft: '110%',
        width: 240,
        height: 40,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderColor: '#F16060',
    },
});
