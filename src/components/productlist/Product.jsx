import {Image, Modal, Text, TextInput, TouchableHighlight, View} from "react-native";
import ProductImage from '../../../assets/brood.jpg'
import ModalProductDetail from "../common/modal/ModalProductDetail";
import {useState} from "react";

const Product = ({title, price, discount, img, navigation}) => {
    const [showModal, setShowModal] = useState(false);
    const newPrice = price - discount;
    return(
        <>
                <View className={"mt-3 ml-0 pr-5 h-36"}>
                    <Modal transparent={true} visible={showModal} animationType={"fade"}>
                        <ModalProductDetail navigation={navigation} title={title}/>
                    </Modal>
                    <TouchableHighlight onPress={()=>{setShowModal(true)}}>
                        <Image className={"rounded h-36 w-40"} source={ProductImage}/>
                    </TouchableHighlight>
                </View>
                <View className={"flex m-2 flex-col"}>
                    <Text className={""}>{title}</Text>
                    <Text className={"line-through flex-row"}>€{Math.round(price * 100) / 100}</Text>
                    <Text className={"flex-row"}>€ {Math.round(newPrice * 100) / 100}</Text>
                    <View className={"flex"}>
                        <Text>{discount}</Text>
                    </View>
                </View>
        </>
    )
}

export default Product;