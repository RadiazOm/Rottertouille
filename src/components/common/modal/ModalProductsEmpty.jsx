import {Button, Modal, Text, View} from "react-native";

function ModalProductsEmpty ({navigation, title})  {
    return(
        <>
            <View className={"modal bg-primaryColor pointer-events-none fixed  top-1/2 left-0 flex items-center justify-center"}>
                <View className={"modal-container bg-blue-500 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"}>

                    <View className={"modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"}>
                        {/*<svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">*/}
                        {/*    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>*/}
                        {/*</svg>*/}
                        {/*<span className="text-sm">(Esc)</span>*/}
                    </View>
                    <View className={"modal-content bg-white py-4 text-left px-6"}>
                        <View className={"flex justify-between items-center pb-3"}>
                            <Text className={"text-2xl font-bold"}>Simple Modal!</Text>
                            <View className={"modal-close cursor-pointer z-50"}>
                                {/*<svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">*/}
                                {/*    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>*/}
                                {/*</svg>*/}
                            </View>
                        </View>

                        <Text>Modal content can go here</Text>
                        <Text>...</Text>
                        <Text>...</Text>
                        <Text>...</Text>
                        <Text>...</Text>

                        <View class={"flex justify-end pt-2"}>
                            <Button onPress={() => {navigation.navigate("Home")}} title={"Return to home page"} className={"px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"}></Button>
                            {/*<Button onPress={()=>{navigation.navigate("SupermarketProducts",  {title:title})}} title={"Close"} className={"modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"}></Button>*/}
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ModalProductsEmpty;