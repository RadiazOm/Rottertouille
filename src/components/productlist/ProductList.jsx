import {FlatList, Modal, SafeAreaView, TouchableHighlight, View} from "react-native";
import Product from "./Product";
import {useState, useEffect} from "react";



function ProductList({id, title, navigation}) {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState(null);
    const [productData , setProductData] = useState([]);
    console.log(id)

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
                console.log("No data")
                alert("Could not get products")
                return;
            } else {
                console.log(products.products);
                setProductData(products.products.map((item) => item));
            }
        }
    }, [products]);



    return (
        <>
            <SafeAreaView>
                <View className={"grid grid-cols-4 col-span-1 gap-1"}>
                    <FlatList className={"mt-10 w-80"}
                              data={productData}
                              numColumns={4}
                              horizontal={false}
                              renderItem={({item}) => <TouchableHighlight className={""}><Product
                                  navigation={navigation}
                                  price={item.price} category={item.category} img={item.image_url}
                                  discount={item.discount} title={item.name}/></TouchableHighlight>}
                    />
                    <Product/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ProductList