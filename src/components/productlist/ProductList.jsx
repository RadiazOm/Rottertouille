import {FlatList, SafeAreaView,TouchableHighlight, View} from "react-native";
import Product from "./Product";
import useFetch from "../../hooks/useFetch";
import ProductImage from '../../../assets/brood.jpg'
import Supermarkt from "../supermarketlist/Supermarkt";
import product from "./Product";


function ProductList({title, navigation}) {
    const products = useFetch('http://89.33.85.29:1068/products');
    console.log("Hello world");
    console.log(products);
   console.log(typeof(products.data));
   console.log("End" +
       "")
    console.log(title);
   let productData = products.data.map((item) => item);
   // console.log(productData.title);
    // const doubled = numbers.map((number) => number * 2);
    // blogs.map((value) => (<BlogCard key={value.id} data={value}/>))


    const data = [
        {
            id:"1",
            title: "Brood",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"2",
            title: "Frambozen",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"3",
            title: "Melk",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"4",
            title: "Kaas",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
        {
            id:"5",
            title: "Yoghurt",
            imageUrl: "url",
            oldPrice: "€4,00",
            newPrice: "2,50"
        },
    ]
    const filteredData = productData.filter(({supermarket}) => supermarket.toLowerCase().includes(title.toLowerCase()));
    return (
        <>
            <SafeAreaView>
            <View className={"grid grid-cols-4 col-span-3 gap-2"}>
                <FlatList className={"mt-10 w-80"}
                          data={filteredData}
                          numColumns={2}
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