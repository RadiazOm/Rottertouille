import {FlatList, Modal, SafeAreaView, TouchableHighlight, View} from "react-native";
import Product from "./Product";
import {useState, useEffect} from "react";



function ProductList({id, isFilterd, filterdProducts, navigation}) {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState(null);
    const [productData , setProductData] = useState([]);

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
            if (products.products.length == 0) {
                alert("Could not get products")
                return;
            } else {
                setProductData(products.products.map((item) => item));
            }
        }
    }, [products]);



    return (
        <View className={"h-96 pb-10 w-full"}>
            <SafeAreaView>
                <View className={""}>
                    <FlatList className={"h-full pt-5  w-80  pl-0"}
                              data={isFilterd ? filterdProducts : productData}
                              numColumns={2}
                              horizontal={false}
                              renderItem={({item}) => <TouchableHighlight className={""}><Product
                                  navigation={navigation}
                                  price={item.price} category={item.category} img={item.image_url}
                                  discount={item.discount} title={item.name}/></TouchableHighlight>}
                    />
                    <Product/>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ProductList