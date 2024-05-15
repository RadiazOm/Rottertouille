import {TextInput, View, StyleSheet,} from 'react-native'
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
        marginTop: "10%",
        width: 350,
        marginLeft: 15,

    },

    input: {
        height: 40,
        borderColor: '#F16060',
        margin: 12,
        borderWidth: 3,
        padding: 10,
        borderRadius: 11,
        textAlign: "left",
        color: "grey",
    },
});

export default Search;