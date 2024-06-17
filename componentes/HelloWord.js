import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Style from '../estilos/Style';

export default function HelloWord(props) {
    return (
        <View>
            <Text style={styles.Text}>Olá mundo! </Text>
            <Text style={Style.texto}>{props.nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Text: Style.texto,
});
