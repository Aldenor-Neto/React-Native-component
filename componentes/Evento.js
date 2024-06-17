import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function Evento() {

    const [nome, setNome] = useState('');

    const onChangeText = (text) => {
        setNome(text);
    }

    return (
        <View>
            <Text style={styles.texto}>Nome :</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={onChangeText}
            />
            <Text style={styles.texto}>Olá {nome} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        color: 'white',
        height: 59,
        width: '100%',
        fontSize: 36,
        borderWidth: 1,
        borderColor: 'black',
        fontFamily: 'Arial', 
    },
    texto: {
        color: 'white'
    }
})