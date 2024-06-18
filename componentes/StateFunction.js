import react from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function StateFunction() {

    const [ligado, setLigado] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                {ligado ? 'O programa está Ligado' : 'O programa está desligado'}
            </Text>
            <Button
                title={ligado ? 'Desligar' : 'Ligar'}
                onPress={() => { setLigado(!ligado) }}
                style={styles.botão}
            >

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'arial'
    },
    botão: {
        backgroundColor: '#cfe2f3',
        color: '#333',
        borderRadius: 5,
        padding: 10,
    }
})
