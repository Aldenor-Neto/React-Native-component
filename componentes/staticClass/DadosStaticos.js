import react, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useState } from "react";

import Pessoa from "./Pessoa";

export default function DadosStaticos() {

    const [nome, setNome] = useState(Pessoa.nome);

    const mudaNome = () => {
        Pessoa.setNome('Francisco Aldenor');
        setNome(Pessoa.nome);
    }

    return (
        <View>
            <Text style={styles.txt}>Nome: {Pessoa.nome} </Text>
            <Button
                title="Muda nome"
                onPress={mudaNome}
                style={styles.btn}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: '#fff',
        fontSize: 20
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f48',
        borderRadius: 10,
        padding: 10
    }
})