import {FlatList, SafeAreaView,TouchableHighlight, View} from "react-native";
import Product from "./Product";
import useFetch from "../../hooks/useFetch";


function ProductList({title, navigation}) {
    const products = useFetch('http://89.33.85.29:1068/products');
   let productData = products.data.map((item) => item);
   

   // console.log(productData);

   const supermarket = productData.map((x) => (x.supermarket))

    console.log(supermarket);
    // console.log(filteredData);

    // const filteredData = productData.filter(({product}) => supermarket.toLowerCase().includes(title.toLowerCase()));
    // console.log(filteredData);
    return (
        <>
            <SafeAreaView>
            <View className={"grid grid-cols-4 col-span-1 gap-1"}>
                <FlatList className={"mt-10 w-80"}
                          data={productData}
                          numColumns={4}
                          horizontal={false}
                          renderItem={({item}) => <TouchableHighlight className={""}><Product navigation={navigation}
                              price={item.price} category={item.category} img={item.image_url} discount={item.discount} title={item.name}/></TouchableHighlight>}
                />
                <Product/>
            </View>
            </SafeAreaView>
        </>
    )
}

export default ProductList