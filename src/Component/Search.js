import {TextInput, View, StyleSheet, } from 'react-native'
import React from 'react';

function Search() {
    const [text, onChangeText] = React.useState('search here... ');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: "20%"

    },

    input: {
        height: 40,
        borderStartWidth: 3,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        color: "grey",
    },
});

export default Search;