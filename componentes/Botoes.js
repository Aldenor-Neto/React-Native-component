import React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

export default function Botoes() {
    return (
        <View>
            <Button
                title="Mensagem"
                onPress={mensagem}
            />
        </View>
    )
}

function mensagem() {
    Alert.alert('Testando o botão dentro da função');
}