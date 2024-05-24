import {View, StyleSheet, Image} from "react-native";
import Logo from '../../assets/LogoApp.png'


const LandingPage = () => {

    return (
        <View style={styles.Container}>
            <View>
                <Image source={Logo} style={styles.Image}/>
            </View>
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    Container: {
        flex:1,
        marginTop:"auto",
        marginBottom:"auto",
        height:"auto",
        width:"auto",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#FDFFF2"
    },
    Image: {
        width: 100,
        height: 200,
        marginLeft: "auto",
        marginRight: "auto"
    }
})