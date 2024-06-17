import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ChecaNumero(props) {
    return validaParOuImpar(props.numero);
}

function validaParOuImpar(numero) {
    return numero % 2 == 0 ? <Text style={styles.text}>O número é par</Text> : <Text style={styles.text}>O número é ímpar</Text>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Adiciona vírgula
        alignItems: 'center', // Corrige nome da propriedade
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});