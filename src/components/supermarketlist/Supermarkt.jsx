import {Image, Text, View} from "react-native";
import {AlbertHeijn} from '../../../assets/Albert_Heijn_Logo.svg';
'../../../assets/Lidl-Logo.svg'

const Supermarkt = (img) => {

    return (
        <>
        <View>
            <View className={"shadow-2xl bg-transparent border-r-4 w-40 h-40 border-0 ml-2.5 mr-4"}>
                <Image source={img.img} className={"w-40 h-40 rounded-large"} />
            </View>
        </View>
        </>
    )
}

export default Supermarkt;