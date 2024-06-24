import {FlatList, Modal, SafeAreaView, TouchableHighlight, View, StyleSheet} from "react-native";
import Product from "./Product";
import {useState, useEffect} from "react";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');  // om de with en height van elke telefoon te krijgen


function ProductList({id, isFilterd, filterdProducts, navigation}) {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState(null);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        (async () => {

            try {
                const response = await fetch("http://89.33.85.29:1068/supermarkets/products/" + id)
                const json = await response.json()
                setProducts(json)
            } catch (e) {
                setShowModal(true)
            }


        })();
    }, [])
    useEffect(() => {
        if (products !== null) {
            if (products.products.length === 0) {
                alert("Could not get products")
                return;
            } else {
                setProductData(products.products.map((item) => item));
            }
        }
    }, [products]);


    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <FlatList

                        data={isFilterd ? filterdProducts : productData}
                        numColumns={2}
                        horizontal={false}
                        renderItem={({item}) =>
                            <TouchableHighlight style={styles.space}>
                                <Product
                                    style={styles.FlatList}
                                    navigation={navigation}
                                    price={item.price} category={item.category} img={item.image_url}
                                    discount={item.discount} title={item.name}/>
                            </TouchableHighlight>}
                    />
                    <Product/>
                </View>
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    FlatList: {
        width: width,
        height: height,
        alignItems: 'center',
    },
    space:{
        marginRight: 20,
    },
})

export default ProductList