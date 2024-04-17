import {Image, Text, View} from "react-native";
import {AlbertHeijn} from '../../../assets/Albert_Heijn_Logo.svg';
'../../../assets/Lidl-Logo.svg'

const Supermarkt = (img) => {

    // for(const image in imgUri.image) {
    //     console.log(image)
    // }
    return (
        <>
        <View>
            <View className={"shadow-2xl bg-transparent border-r-4 w-36 h-40 border-0 ml-4 mr-4"}>
                <Image source={img.img} className={"w-32 h-40"}/>
            </View>
        </View>
        </>
    )
}

export default Supermarkt;