import react from "react";
import { Text, View, TouchableOpacity, TouchableHighlight, StyleSheet } from "react-native";
import { useState } from "react";

export default function Toque() {
    const [contador, setContador] = useState(0);

    const quantidade = () => {
        setContador(contador + 1);
    }

    return (
        <View>
            <View>
                <Text style={styles.texto}>
                    TouchableOpacity: Diminui a opacidade do elemento quando tocado.
                </Text>
                <TouchableOpacity style={styles.botao} onPress={quantidade}>
                    <Text>Click aqui para incrementar o contador</Text>
                </TouchableOpacity>
                <Text style={styles.texto}>Contador: {contador}</Text>
            </View>

            <View>
                <Text style={styles.texto}>
                    TouchableHighlight: Muda a cor de fundo do elemento quando pressionado
                </Text>
                <TouchableHighlight style={styles.botao} onPress={quantidade}>
                    <Text>Click aqui para incrementar o contador</Text>
                </TouchableHighlight>
                <Text style={styles.texto}>Contador: {contador}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#faf',
        color: '#fff',
        fontSize: 22,
        padding: 10,
        borderBlockColor: '#f0f',
        borderRadius: 10
    },
    texto: {
        color: 'yellow',
        fontSize: 15,
    }
})