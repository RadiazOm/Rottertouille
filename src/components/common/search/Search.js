import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Search() {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Zoeken"
                    underlineColorAndroid="transparent"
                />
                <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: 350,
        marginLeft: 15,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        position: 'absolute',
        left: '6%',
        top: '35%',
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 30, // Maak ruimte voor het icoon
        backgroundColor: '#fff',
        color: '#424242',
        height: 40,
        borderColor: '#F16060',
        margin: 12,
        borderWidth: 3,
        borderRadius: 11,
    },
});

export default Search;