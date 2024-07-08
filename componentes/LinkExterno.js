import react from "react";
import { Text, View, Button, Linking, StyleSheet } from "react-native";

export default function LinkExterno() {

const youtube = () => {
    Linking.openURL('https://www.youtube.com/');
}

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Estudando Links Externos!</Text>
            <Button
            style={styles.botoes}
            title="YouTube"
            onPress={youtube}
            />
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
flex: 1,
alignItems: "center",
justifyContent: "center"
    },
    texto:{
        color: '#fff',
        fontSize: 18,
    },
    botoes: {
        backgroundColor: '#009',
        color: '#f0f',
       borderRadius: 10,
       padding: 10, 
    }
})